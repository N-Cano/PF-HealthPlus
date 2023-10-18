/* eslint-disable react/prop-types */
import Dates from "./Dates/Dates";
const CardsDates = ({ dates }) => {
  return (
    <div className="w-full flex flex-col h-full mt-20">
      <div className="border-2 h-full flex flex-col justify-center item-center bg-gray-100 rounded-2xl gap-6  p-4">
        {dates.map((user) => (
          <Dates
            doctorName={user.doctor}
            doctorId={user.doctorId}
            specialty={user.specialty}
            date={user.date}
            status={user.status}
            key={user.id}
            schedule={user.schedule}
            dateId={user.id}
            userId={user.userId}
          />
        ))}
      </div>
    </div>
  );
};
export default CardsDates;
