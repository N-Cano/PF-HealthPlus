import { deleteDate } from "./deleteDate";

const Dates = (props) => {

  return (
    <div className="w-full bg-blue-200 p-8 " key={props.id}>
      <button
        onClick={deleteDate}
        className="absolute right-0 font-bold bg-red-600 p-2 rounded-full"
      >
        X
      </button>
      <div className="flex gap-4 ">
        <p>Dr: {props.name}</p>
        <p>Specialty: {props.specialty}</p>
        <p>date: {props.date}</p>
        <p>schedule: {props.schedule}</p>
      </div>
    </div>
  );
};

export default Dates;
