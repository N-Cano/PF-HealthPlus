import { Link } from "react-router-dom";

const Docs = (props) => {
  return (
    <Link to={`/detail/${props.id}`} key={props.id}>
      <div className="mt-5 mb-5  text-center  border-2 w-400 h-400  bg-blue-200 w-56 h-full ">
        <p className="mt-6" style={{ fontFamily: "Open Sans, sans-serif" }}>
          Dr: {props.name}
        </p>
        <p style={{ fontFamily: "Open Sans, sans-serif" }}>
          Specialty: {props.specialty}
        </p>
      </div>
    </Link>
  );
};

export default Docs;
