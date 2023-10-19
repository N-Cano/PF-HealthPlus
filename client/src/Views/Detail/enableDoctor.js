import axios from "axios";

export const enableDoctor = async (doctorId) => {
    try {
        await axios.put(`http://localhost:3001/doctors/enable/${doctorId}`);
    } catch (error) {
        console.error("Error deleting doctor:", error);
    }
};