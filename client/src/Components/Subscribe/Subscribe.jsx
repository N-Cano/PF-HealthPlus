import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-3">
      <h2
        className="text-[30px] text-center pt-2 mt-[80px] mb-0 font-semibold"
        style={{ fontFamily: "Rubik, sans-serif" }}
      >
        {t("HOME PAGE.SUBSCRIBE.TAGLINE")}
      </h2>
      <div className="grid grid-cols-3 h-[400px]">
        <div className="flex flex-col justify-center items-center p-4">
          <FaUserDoctor className="text-4xl" />
          <h3
            className="text-xl mt-4 text-left"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            {t("HOME PAGE.SUBSCRIBE.DESCRIPTION 1")}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6993/6993594.png"
            alt="Hospital Image"
            className="w-16 h-16"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <div className="text-center">
            <p
              className="text-base mb-4"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              {t("HOME PAGE.SUBSCRIBE.DESCRIPTION 2")}
            </p>
            <strong className="text-lg block mb-2">
              {t("HOME PAGE.SUBSCRIBE.PRICE")}
            </strong>
          </div>

          <Link to="/plan">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {t("HOME PAGE.SUBSCRIBE.BUTTON")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
