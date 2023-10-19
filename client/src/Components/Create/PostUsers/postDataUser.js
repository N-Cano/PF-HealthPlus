import axios from "axios";

export const postDataUser = async (formData) => {
    try {
        const response = await axios.post("http://localhost:3001/doctors", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};