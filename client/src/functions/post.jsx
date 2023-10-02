import axios from "axios";

export const postUser = (user) => {
    return async () => {
        try {
            await axios.post("http://localhost:3001/users/signup", user);
        }
        catch (error) {
            console.error("Error al crear el usuario:", error)
            throw new Error(error);
        }
    };
}