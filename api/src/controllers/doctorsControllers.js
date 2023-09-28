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
// ? Siempre y cuando la propiedad isActive sea true

const bringDoctorById = async (id) => {
    try {
        const doc = await db.collection('doctors').doc(id).get()
        const doctor = {
            id: doc.id,
            ...doc.data()
        };
        if (doctor.name) return doctor;
        else throw new Error(`No doctor matched with ID: ${id}`)

    } catch (error) {
        throw new Error(error)
    }
};

// --- Create a new doctor ---

const createDoctor = async ({ name, description, enable, image, price, specialty }) => {
    try {
        const newDoctor = await db.collection('doctors').add({
            description,
            enable,
            image,
            name,
            price,
            specialty
        });

        return {
            status: 'created',
            doctor: newDoctor
        }
    } catch (error) {
        throw new Error(error)
    }
};

//? --- Delete a doctor ---

// ? agregarle una propiedad isActive, que esta función la cambiaría a false

// routes.get('/delete-doctor/:id', async (req, res) => {
//     await db.collection('doctors').doc(req.params.id).delete()
//     res.send('doctor deleted')
// })

module.exports = { bringDoctors, bringDoctorById, createDoctor };