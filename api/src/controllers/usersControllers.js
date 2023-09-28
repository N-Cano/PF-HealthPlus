const { db } = require('../firebase')

// --- Create a User ---

const createUser = async ({ name, email, password, personalId, image, location, plan }) => {
    try {
        const querySnapshot = await db.collection('plans').where('benefits', '==', plan).get();
        const plansData = []
        querySnapshot.forEach((doc) => {
            plansData.push(doc.data())
        })
        const newUser = await db.collection('users').add({
            name,
            email,
            password,
            personalId,
            image,
            location,
            plan: plansData
        })

        return {
            status: 'created',
            user: newUser
        }
    } catch (error) {
        throw new Error(error)
    }

}
module.exports = createUser
