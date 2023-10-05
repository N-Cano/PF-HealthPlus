import axios from "axios";
import {
    GET_DOCTORS,
    GET_DOCTOR,
    GET_DOCTORS_NAME,
    GET_PATIENT,
    FILTER_SPECIAL,
    ORDER,
    PRICE
} from "./actions-types";

export const getDoctors = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/doctors");
            const doctors = response.data;
            dispatch({
                type: GET_DOCTORS,
                payload: doctors,
            });
        }
        catch (error) {
            console.error("Error al obtener los datos de los doctores:", error)
            throw new Error(error);
        }
    };
};
export const getDoctorName = (name) => {
    return async (dispatch) => {
        try {
            let json = await axios.get(`http://localhost:3001/doctors?name=${name}`);
            return dispatch({
                type: GET_DOCTORS_NAME,
                payload: json.data  //es lo q devuelve la ruta una vez q le asigno algo por name
            })
        } catch (error) {
            alert('Game not found 😕');
        }
    }
}

export const getDoctor = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/doctors/${id}`);
            const doctor = response.data;
            dispatch({
                type: GET_DOCTOR,
                payload: doctor,
            });
        }
        catch (error) {
            console.error("Error al obtener los datos del doctor:", error)
            throw new Error(error);
        }
    };
}

export const getPatient = (id) => {
    
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/users/${id}`);
            const patient = response.data;

            dispatch({
                type: GET_PATIENT,
                payload: patient,
            });
        }
        catch (error) {
            console.error( "Error al obtener los datos del paciente:", error)
            throw new Error(error);
        }
    };
}
export const filterSpeciality = (special) => {
    return {
        type: FILTER_SPECIAL,
        payload: special,
    };
};
export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden,
    };
};
export const priceCards = (price) => {
    return {
        type: PRICE,
        payload: price,
    };
};

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
export const setImage = (imageSrc) => ({
  type: 'SET_IMAGE',
  payload: imageSrc,
});