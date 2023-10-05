/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/detail/${props.id}`} key={props.id}>
      <div className="mt-5 mb-10 text-1xl text-center rounded-3xl border-2 w-400 h-400 flex-col flex-wrap flex jus items-center transition ease-in-out delay-150 bg-blue-200 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 w-56 max-h-80 h-full overflow-hidden">
        <p className="mt-6" style={{ fontFamily: "Open Sans, sans-serif" }}>
          Dr: {props.name}
        </p>
        <p style={{ fontFamily: "Open Sans, sans-serif" }}>
          Specialty: {props.specialty}
        </p>
        <div className="w-40 content-center mt-2">
          <img
            className="max-w-52 max-h-52 w-full h-full object-cover rounded-3xl mt-4 hover:scale-110 transition ease-in-out duration-300"
            src={props.photo}
            alt="profile photo"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
