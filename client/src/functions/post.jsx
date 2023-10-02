import axios from "axios";

export const postUser = async (user) => {
    try {
        const response = await axios.post("http://localhost:3001/users/signup", user);
        return response.data; // Puedes devolver la respuesta si es necesario
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw new Error(error);
    }
};