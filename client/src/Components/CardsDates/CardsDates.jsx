import Dates from "./Dates/Dates";
const CardsDates = ({ dates }) => {
  return (
    <div className="w-full flex flex-col mb-8 ">
      <div className="border-2  mt-80 flex flex-col justify-center item-center bg-gray-100 rounded-2xl gap-6 h-96">
        {dates.map((user) => (
          <Dates
            name={user.doctor}
            specialty={user.specialty}
            date={user.date}
            key={user.id}
            schedule={user.schedule}
            id={user.id}
          />
        ))}
      </div>
    </div>
  );
};
export default CardsDates;