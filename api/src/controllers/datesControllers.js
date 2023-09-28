const { db } = require('../firebase')

// --- Create a Date ---

const createDate = async ({ userId, doctorId, date, schedule }) => {
    try {
        const doctorData = await db.collection('doctors').doc(doctorId).get()
        const doctor = {
            ...doctorData.data()
        };
        const newDate = {
            userId,
            doctor: doctor.name, 
            date,
            schedule,
            specialty: doctor.specialty,
            price: doctor.price
        };
        await db.collection('date').add(newDate)
        return {
            status: 'created',
            newDate
        }
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
};
module.exports = { createDate };