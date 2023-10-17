import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../../contextAPI/ThemeContext";

const Card = (props) => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Link to={`/detail/${props.id}`} key={props.id}>
      <div
        className="mt-5 mb-5 text-1xl text-center rounded-3xl border-1 w-400 h-400 flex-col flex-wrap flex jus items-center transition ease-in-out delay-150 bg-blue-200 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 w-56 max-h-90 overflow-hidden"
        style={{
          backgroundColor: darkMode ? "black" : "",
        }}>
        <div className="w-40 content-center mt-2">
          <img
            className="max-w-52 max-h-52 w-full h-full object-cover rounded-3xl mt-3 mb-8 hover:scale-110 transition ease-in-out duration-300"
            src={props.photo}
            alt="profile photo"
          />
        </div>
        <p
          style={{
            fontFamily: "Open Sans, sans-serif",
            marginTop: "-12px",
            color: darkMode ? "white" : "#114899",
          }}>
          Dr. {props.name}
        </p>
        <p
          style={{
            fontFamily: "Open Sans, sans-serif",
            marginTop: "2px",
            marginBottom: "10px",
          }}>
          <strong>{t("CARDS.SPECIALTY")}</strong>: <br></br> {props.specialty}
        </p>

        {pathname === "/home" && (
          <button
            className="bg-black text-white h-10 w-20 rounded-2xl mt-2 hover:bg-white hover:text-black mb-2"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            {t("CARDS.BUTTON")}
          </button>
        )}
      </div>
    </Link>
  );
};

export default Card;
