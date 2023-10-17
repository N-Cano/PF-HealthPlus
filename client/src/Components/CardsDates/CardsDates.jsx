/* eslint-disable react/prop-types */
import Dates from "./Dates/Dates";
const CardsDates = ({ dates }) => {
  return (
    <div className="w-full flex flex-col mb-8 ">
      <div className="border-2  mt-80 flex flex-col justify-center item-center bg-gray-100 rounded-2xl gap-6 h-96">
        {dates.map((user) => (
          <Dates
            doctorName={user.doctor}
            docotrId={user.docotrId}
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
