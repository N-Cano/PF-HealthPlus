const {db} = require('../firebase');

// --- Bring all doctors from data base ---

const bringDoctors = async (req, res) => {

    const querySnapshot = await db.collection('doctors').get()
    const doctors = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return doctors;
};

module.exports = bringDoctors;