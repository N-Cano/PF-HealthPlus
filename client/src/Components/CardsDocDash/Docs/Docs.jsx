import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTheme } from "../../../contextAPI/ThemeContext";

const Docs = (props) => {
  const { darkMode } = useTheme();

  return (
    <div>
      <Link to={`/detail2/${props.id}`} key={props.id}>
        <div
          className="rounded-2xl mt-5 py-6 text-center w-full h-400 transition ease-in-out duration-300 bg-blue-100 hover:scale-110 hover:bg-blue-300 h-full flex flex-row justify-around"
          style={{ background: darkMode ? "#00519C" : "" }}
        >
          <p
            className="w-[300px]"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            {props.name}
          </p>
          <p className="w-[300px]">
            {props.specialty}
          </p>
          <p className="w-[300px]">
            {props.email}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Docs;
