const { db } = require('../firebase')

//  --- Sign up ---
const signUpUser = async ({ name, lastName, email, password }) => {
    try {
        //* Verificar que no exista el usuario
        // const querySnapshot = await db.collection('users').where('email', '==', email).get();
        // const matchedUsers = [];
        // querySnapshot.forEach((user) => {
        //     matchedUsers.push({
        //         ...user.data()
        //     })
        // });
        // console.log(matchedUsers);
        // if (matchedUsers.length > 0) throw new Error('Email already in use')
        
        const newUser = await db.collection('users').add({
            name,
            lastName,
            email,
            // ! Hashear contraseña
            password
        });
        return newUser;
    } catch (error) {
        throw new Error(error)
    }
};

// --- Login ---
const logInUser = async (email, password) => {
    try {
        const userData = await db.collection('users').where('email', '==', email).get();
        const user = [];
        userData.forEach((us) => {
            user.push({
                id: us.id,
                ...us.data()
            })
        })
        if(user.length < 1) throw new Error('Mail not registered');
        if(user[0].password !== password) throw new Error('Unvalid mail or password');
        else return true;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
};  


//? --- Update user ---

const createUser = async ({ name, email, password, personalId, location, enable, photo }) => {
    try {
        // Posibilidad de que no manden photo?
        const updateUser = await db.collection('users').add({
            enable,
            name,
            email,
            password,
            personalId,
            location,
            photo
        })

        return {
            status: 'created',
            user: updateUser
        }
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }

}

// --- Bring an user from data base---

const bringUserById = async (id) => {
    try {
        const userData = await db.collection('users').doc(id).get();
        const user = {
            id: userData.id,
            ...userData.data()
        };
        if (user.name) return user;
        else throw new Error(`No user matched with ID: ${id}`)
    } catch (error) {
        throw new Error(error)
    }
};

// --- Delete an user from data base ---
const deleteUser = async (id) => {
    try {
        const deletedUser = await db.collection('users').doc(id).delete();
        return deletedUser;
        // Falta tirar error al no encontrar usuario
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

// --- Disable an user from data base --- 
const disableUser = async (id) => {
    try {
        return await db.collection('users').doc(id).update({
            enable: false
        })
    } catch (error) {
        throw new Error(error)
    }
};


module.exports = { createUser, bringUserById, deleteUser, disableUser, signUpUser, logInUser }