import {
  GET_DOCTORS,
  GET_DOCTOR,
  GET_PATIENT,
  FILTER_SPECIAL,
  ORDER,
  PRICE,
  GET_DOCTORS_NAME,
  GET_DATE_ID,
  GET_USERS,
  GET_USERS_NAME,
} from "./actions-types";

const initialState = {
  doctors: [],
  doctorsBackups: [],
  users: [],
  usersBackups: [],
  doctor: {},
  patient: [],
  imageSrc: "",
  dateById: [],
};
const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctors: actions.payload,
        doctorsBackups: actions.payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: actions.payload,
        usersBackups: actions.payload,
      };

    case GET_DOCTOR:
      return { ...state, doctor: actions.payload };

    case GET_PATIENT:
      return { ...state, patient: actions.payload };
    case GET_DOCTORS_NAME:
      return {
        ...state,
        doctors: actions.payload,
      };
    case GET_USERS_NAME:
      return {
        ...state,
        users: actions.payload,
      };

    case FILTER_SPECIAL:
      if (actions.payload === "allDocs") {
        return { ...state, doctors: state.doctorsBackups };
      } else {
        // Filtrar por especialidad
        const filteredDoctors = state.doctorsBackups.filter(
          (doctor) => doctor.specialty === actions.payload
        );
        return { ...state, doctors: filteredDoctors };
      }

    case ORDER:
      const sortName =
        actions.payload === "A"
          ? [
              ...state.doctors.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              }),
            ]
          : [
              ...state.doctors.sort(function (a, b) {
                if (a.name > b.name) {
                  return -1;
                }
                if (b.name > a.name) {
                  return 1;
                }
                return 0;
              }),
            ];
      return {
        ...state,
        doctors: sortName,
      };

    case PRICE:
      const sortPrice =
        actions.payload === "Low"
          ? [
              ...state.doctors.sort(function (a, b) {
                if (a.price > b.price) {
                  return 1;
                }
                if (b.price > a.price) {
                  return -1;
                }
                return 0;
              }),
            ]
          : [
              ...state.doctors.sort(function (a, b) {
                if (a.price > b.price) {
                  return -1;
                }
                if (b.price > a.price) {
                  return 1;
                }
                return 0;
              }),
            ];
      return {
        ...state,
        doctors: sortPrice,
      };
    case "SET_IMAGE":
      return { ...state, imageSrc: actions.payload };

    case GET_DATE_ID:
      return { ...state, dateById: actions.payload };

    default:
      return { ...state };
  }
};
export default rootReducer;
