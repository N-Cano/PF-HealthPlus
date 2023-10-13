import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const postUser = async (user) => {
    try {
        const response = await axios.post("http://localhost:3001/users/signup", user);
        return response;
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw new Error(error);
    }
};

export const postEmail = async (data) => {
    // Crear el usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;
    console.log("User UID:", user.uid);
    console.log("User Email:", user.email);

    // Vincular al usuario auteticado a un documento en Firestore
    const response = await axios.post('http://localhost:3001/users/signup', {
        uid: user.uid,
        email: user.email
    });

    return response;
};

export const authEmail = async (user) => {
    if (user.created) return
    await axios.post('http://localhost:3001/users/signup', {
        uid: user.uid,
        email: user.email
    })
    user.created = true

};

export const postDate = async (data) => {
    // Formatear la fecha antes de enviarla al servidor
    const dateParts = data.date.split('-'); // Dividir la fecha por guiones
    const formattedDate = dateParts.reverse().join('-'); // Invertir y volver a unir las partes

    // Crear una copia de los datos con la fecha formateada
    const formattedData = { ...data, date: formattedDate };
    console.log(formattedData);

    const response = await axios.post("http://localhost:3001/dates", formattedData);
    console.log("Datos Cargados", formattedData);
    return response;
}