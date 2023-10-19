import axios from "axios";

export const disableDoctor = async (doctorId) => {
    try {
        await axios.put(`http://localhost:3001/doctors/disable/${doctorId}`);
    } catch (error) {
        console.error("Error deleting doctor:", error);
    }
};