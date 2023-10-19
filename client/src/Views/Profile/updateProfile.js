import axios from "axios";

export const updateProfile = async (formData) => {
    try {
        await axios.put("http://localhost:3001/users/profile", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    } catch (error) {
        throw error;
    }
};