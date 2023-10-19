import axios from "axios";

export const makePaymentRequest = (product) => {
    return axios
        .post("http://localhost:3001/payment", product)
        .then((res) => res.data.response.body.init_point)
        .catch((error) => {
            console.error("Error making payment request:", error);
            return null;
        });
};


