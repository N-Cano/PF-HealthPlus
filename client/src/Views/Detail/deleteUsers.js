import axios from "axios";

export const deleteUser = async (userId) => {
    try {
        await axios.delete(`http://localhost:3001/users/${userId}`);
    } catch (error) {
        console.error("Error deleting user:", error);
    }
};
