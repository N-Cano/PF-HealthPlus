const { FieldValue } = require('firebase-admin/firestore');
const { db } = require('../firebase')
const sendEmail = require('./emailSenderControllers');

// --- Create a Date ---

const createDate = async ({ userId, doctorId, date, schedule, email }) => {
    try {
        const doctorData = await db.collection('doctors').doc(doctorId).get()
        const doctor = {
            ...doctorData.data()
        };
        if (!doctor.name) throw new Error(`No doctor matched with ID: ${doctorId}`);

        const userData = await db.collection('users').doc(userId).get()

        const user = {
            ...userData.data()
        };
        if (!user.name) throw new Error(`No user matched with ID: ${userId}`)

        const newDate = {
            user: user.name,
            doctor: doctor.name,
            specialty: doctor.specialty,
            date,
            schedule
        };

        const collectionRef = await db.collection('dates').add(newDate);

        newDate.id = collectionRef.id

        await db.collection('users').doc(userId).update({
            dates: FieldValue.arrayUnion(newDate)
        })

        //envia mail con la cita
        await sendEmail(email, doctor, date, schedule, user);


        return {
            status: 'created',
            newDate
        }
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
};

// --- check availability ---
// Con esta forma se hace una consultapara verificar que la cita que sequiere crear sea 

const checkDates = async () => {
    try {
        const dates = await db.collection('dates').get()
        const datesTaken = [];
        dates.forEach((date) => {
            datesTaken.push({
                ...date.data()
            })
        });
        return datesTaken;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

// --- Delete a Date ---

const deleteDate = async (dateId, userId) => {
    try {
        const dateRef = await db.collection('dates').doc(dateId).get();
        const date = {
            id: dateRef.id,
            ...dateRef.data()
        };
        
        const userRef = await db.collection('users').doc(userId).get()
        const user = {
            ...userRef.data()
        }
        const filteredDates = user.dates.filter((date) => date.id !== dateId);
        await db.collection('users').doc(userId).update({
            dates: filteredDates
        })

        if(date.doctor) {
            await db.collection('dates').doc(dateId).delete();
            return date
        } else throw new Error(`date with id ${dateId} not found`)
    } catch (error) {
        throw new Error(error)
    }
};

module.exports = { createDate, checkDates, deleteDate };