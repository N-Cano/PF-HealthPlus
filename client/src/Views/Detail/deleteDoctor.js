import axios from "axios";

export const deleteDoctor = async (doctorId) => {
    try {
        await axios.delete(`http://localhost:3001/doctors/${doctorId}`);
    } catch (error) {
        console.error("Error deleting doctor:", error);
    }
};
