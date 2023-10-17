import axios from "axios";

export const deleteDate = () => {
    axios.delete(`http://localhost:3001/dates/${props.id}`);
};