import {
    GET_DOCTORS,
    GET_DOCTOR,
    GET_PATIENT,
} from "./action-types";

const initialState = {
    doctors: [],
    doctor: {},
    patient: {},
}
const rootReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DOCTORS:
            return { ...state, doctors: actions.payload }

        case GET_DOCTOR:
            return { ...state, doctor: actions.payload }

        case GET_PATIENT:
            return { ...state, patient: actions.payload }

        default:
            return { ...state }
    }
}
export default rootReducer