const { db } = require('../firebase');

// --- Bring all doctors from data base ---

const bringDoctors = async () => {
    try {
        const allDoctors = await db.collection('doctors').get()
        const doctors = allDoctors.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return doctors;

    } catch (error) {
        throw new Error(error)
    }
};

// --- Bring a doctor from data base ---

const bringDoctorById = async (id) => {
    try {
        const doc = await db.collection('doctors').doc(id).get()

        const doctor = {
            id: doc.id,
            ...doc.data()
        };
        return doctor

    } catch (error) {
        throw new Error(error)
    }
};

module.exports = { bringDoctors, bringDoctorById };