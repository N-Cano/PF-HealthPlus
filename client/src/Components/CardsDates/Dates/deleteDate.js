import axios from "axios";

export const cancelDate = (props) => {
  axios.put(`http://localhost:3001/dates/cancel`, {
    userId: props.userId,
    dateId: props.dateId,
    doctorId: props.doctorId,
  });
  window.location.reload();
};
