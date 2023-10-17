import { deleteDate } from "./deleteDate";

const Dates = (props) => {

  const cancelDate = () => {
    axios.put(`http://localhost:3001/dates/cancel`, {
      userId: props.userId,
      dateId: props.dateId,
      doctorId: props.doctorId
    });
    alert('llevar a un forn para dejar un mensaje?')
  };
  const reviewDate = () => {
    alert('emulo que llevo al form')
  };

  return (
    <div className="w-full bg-blue-200 p-8 " key={props.dateId}>
      {
        props.status === 'pending'
          ? <button
            onClick={cancelDate}
            className="absolute right-0 font-bold bg-red-600 p-2 rounded-full"
          >
            X
          </button>
          : props.status === 'taken'
          ? <button
            onClick={reviewDate}
            className="absolute right-0 font-bold bg-red-600 p-2 rounded-full"
          >
            Review
          </button>
          : null
      }
    
      <div className="flex gap-4 ">
        <p>Dr: {props.doctorName}</p>
        <p>
          Specialty: {props.specialty}
        </p>
        <p >
          date: {props.date}
        </p>
        <p >
          schedule: {props.schedule}
        </p>
        <p >
          status: {props.status}
        </p>

      </div>
    </div>
  );
};

export default Dates;
