import { Link } from "react-router-dom";

const Users = (props) => {
  return (
    <Link to={`/DetailUsers/${props.id}`} key={props.id}>
      <div className="rounded-2xl mt-5 py-6 text-center w-full h-400 transition ease-in-out duration-300 bg-blue-100 hover:scale-110 hover:bg-blue-300 h-full flex flex-row justify-around">
        <p className="w-[300px]" style={{ fontFamily: "Open Sans, sans-serif" }}>
          {props.name}
        </p>
        <p className="w-[300px]" style={{ fontFamily: "Open Sans, sans-serif" }}>
          {props.lastName}
        </p>
        <p className="w-[300px]" style={{ fontFamily: "Open Sans, sans-serif" }}>
          {props.email}
        </p>
      </div>
    </Link>
  );
};

export default Users;
