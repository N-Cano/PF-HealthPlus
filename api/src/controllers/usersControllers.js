const { db } = require('../firebase')

// --- Create a new user ---

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

// --- Bring a user from data base---

const bringUserById = async (id) => {
    try {
        const userData = await db.collection('users').doc(id).get();
        const user = {
            id: userData.id,
            ...userData.data()
        };
        if(user.name) return user;
        else throw new Error(`No user matched with ID: ${id}`)
    } catch (error) {
        throw new Error(error)
    }
};


module.exports = {createUser, bringUserById }