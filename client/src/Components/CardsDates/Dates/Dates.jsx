import axios from "axios";
const Dates = (props) => {
  const deleteDate = () => {
    axios.delete(`http://localhost:3001/dates/${props.id}`);
  };
  return (
    <div className="w-full bg-blue-200 p-8 " key={props.id}>
      <button
        onClick={deleteDate}
        className="absolute right-0 font-bold bg-red-600 p-2 rounded-full"
      >
        X
      </button>
      <div className="flex gap-4 ">
        <p style={{ fontFamily: "Open Sans, sans-serif" }}>Dr: {props.name}</p>
        <p style={{ fontFamily: "Open Sans, sans-serif" }}>
          Specialty: {props.specialty}
        </p>
        <p style={{ fontFamily: "Open Sans, sans-serif" }}>
          date: {props.date}
        </p>
        <p style={{ fontFamily: "Open Sans, sans-serif" }}>
          schedule: {props.schedule}
        </p>
      </div>
    </div>
  );
};

export default Dates;
