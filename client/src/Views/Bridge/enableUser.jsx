import axios from "axios";

export const enableUser = async (uid) => {
    try {
        await axios.put(`http://localhost:3001/users/enable/${uid}`)
    } catch (error) {
        console.error(error);
    }
};
