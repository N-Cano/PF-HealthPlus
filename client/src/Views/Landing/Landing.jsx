import { Link } from "react-router-dom";
import {
  Footer,
  SlidesBanner,
  Sponsors,
  Location,
  AvailableServices,
  Newsletter,
} from "../../Components/index";
import ScrollToTop from "react-scroll-to-top";
import NavBar from "../../Components/NavBar/NavBar";
import Specialties from "../../Components/Specialties/Specialties";
import Cards from "../../Components/CardsComponent/Cards/Cards";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";
import "../../contextAPI/DarkMode.css";
import Chatbot from "../../Components/ChatBot/ChatBot";

const Landing = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  return (
    <div
      className={
        darkMode
          ? "dark-mode"
          : "bg-gradient-to-br from-blue-300 to-gray-100 shadow-lg"
      }>
      <NavBar />
      <Chatbot />
      {/* BANNER COMO SLIDES */}
      <SlidesBanner />
      {/* ABOUT US  1*/}
      <div
        id="about"
        className="flex flex-col md:flex-row md:items-center md:justify-center">
        <div
          className="flex-1 p-4 bg-blue-200 rounded-lg shadow-md my-2 mx-1 md:my-6 md:mr-2 md:ml-2 md:pb-12 h-48"
          style={{ backgroundColor: darkMode ? "#00519C" : "" }}>
          <h3
            className="mt-5 text-center text-2xl"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            {t("LANDING PAGE.ABOUT US 1.WHAT DO WE DO.TITLE")}
          </h3>

          <p
            className="mt-5 text-center"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            {t("LANDING PAGE.ABOUT US 1.WHAT DO WE DO.DESCRIPTION")}
          </p>
        </div>

        <div
          className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:flex md:flex-col md:justify-center md:pb-12 h-48"
          style={{ backgroundColor: darkMode ? "#00519C" : "" }}>
          <h3
            className="mt-5 text-center text-2xl"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            {t("LANDING PAGE.ABOUT US 1.OUR COMMUNITY.TITLE")}
          </h3>
          <p
            className="mt-5 text-center"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            {t("LANDING PAGE.ABOUT US 1.OUR COMMUNITY.DESCRIPTION")}
          </p>
          <div className="flex-grow"></div>
        </div>

        <div
          className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:flex md:flex-col md:justify-center md:pb-12 h-48"
          style={{ backgroundColor: darkMode ? "#00519C" : "" }}>
          <h3
            className="mt-5 text-center text-2xl"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            {t("LANDING PAGE.ABOUT US 1.CONTACT US.TITLE")}
          </h3>
          <p
            className="mt-5 text-center"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            {t("LANDING PAGE.ABOUT US 1.CONTACT US.DESCRIPTION")}
          </p>
          <div className="flex-grow"></div>
        </div>
      </div>
      {/* ABOUT US 2*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
        <div
          className="relative rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 h-auto md:h-96"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="absolute inset-0 bg-black opacity-70 text-white p-4 rounded-lg group-hover:opacity-100 z-10 flex justify-center items-center">
            <p
              className="mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center"
              style={{ fontFamily: "Rubik, sans-serif" }}>
              {t("LANDING PAGE.ABOUT US 2.DESCRIPTION 1")}
            </p>
          </div>
        </div>

        <div
          className="relative rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 h-auto md:h-96"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="absolute inset-0 bg-black opacity-70 text-white p-4 rounded-lg group-hover:opacity-100 z-10 flex justify-center items-center">
            <div className="md:flex md:flex-row md:items-center md:w-full">
              <p
                className="mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center"
                style={{ fontFamily: "Rubik, sans-serif" }}>
                {t("LANDING PAGE.ABOUT US 2.DESCRIPTION 2")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  SERVICES */}
      <div id="doctors" className="grid grid-cols-3 gap-2 mt-1">
        <div
          className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
          style={{ backgroundColor: darkMode ? "#1E3144" : "" }}>
          <div>
            <div
              className="bg-blue-900 w-full rounded-lg h-12 flex items-center justify-center"
              style={{ backgroundColor: darkMode ? "#325372" : "" }}>
              <h2
                className="text-white text-center"
                style={{ fontFamily: "Rubik, sans-serif" }}>
                {t("LANDING PAGE.SERVICES.APPOINTMENTS.TITLE")}
              </h2>
            </div>
            <img
              src='https://res.cloudinary.com/drpge2a0c/image/upload/v1697553463/assets/backgrounds/doctor_6_1_400x400_wasu1j.jpg'
              alt="doctor"
              className="w-full h-full ps-0 rounded-lg"
              style={{ opacity: darkMode ? 0.7 : 1 }}
            />
          </div>
          <Link to="/login">
            <button
              className="bg-black text-white h-12 w-28 rounded-2xl  hover:bg-white hover:text-black -mt-8"
              style={{
                fontFamily: "Open Sans, sans-serif",
                opacity: darkMode ? 0.8 : 1,
              }}>
              {t("LANDING PAGE.SERVICES.APPOINTMENTS.BUTTON")}
            </button>
          </Link>
        </div>
        <div
          className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
          style={{ backgroundColor: darkMode ? "#1E3144" : "" }}>
          <div>
            <div
              className="bg-blue-900 w-full rounded-lg h-12 flex items-center justify-center"
              style={{ backgroundColor: darkMode ? "#325372" : "" }}>
              <h2
                className="text-white text-center"
                style={{ fontFamily: "Rubik, sans-serif" }}>
                {t("LANDING PAGE.SERVICES.PROFESSIONALS.TITLE")}
              </h2>
            </div>
            <img
              src='https://res.cloudinary.com/drpge2a0c/image/upload/v1697553469/assets/backgrounds/doctor_2_400x400_vgevvu.jpg'
              alt="doctor"
              className="w-[100%] h-full ps-0 rounded-md"
              style={{ opacity: darkMode ? 0.7 : 1 }}
            />
          </div>
          <Link to="/login">
            <button
              className="bg-black text-white h-12 w-28 rounded-2xl  hover:bg-white hover:text-black -mt-8"
              style={{
                fontFamily: "Open Sans, sans-serif",
                opacity: darkMode ? 0.8 : 1,
              }}>
              {t("LANDING PAGE.SERVICES.PROFESSIONALS.BUTTON")}
            </button>
          </Link>
        </div>
        <div
          className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
          style={{ backgroundColor: darkMode ? "#1E3144" : "" }}>
          <div>
            <div
              className="bg-blue-900 w-full rounded-md h-12 flex items-center justify-center"
              style={{ backgroundColor: darkMode ? "#325372" : "" }}>
              <h2
                className="text-white text-center"
                style={{
                  fontFamily: "Rubik, sans-serif",
                  opacity: darkMode ? 0.8 : 1,
                }}>
                {t("LANDING PAGE.SERVICES.CHECKOUT.TITLE")}
              </h2>
            </div>
            <img
              src='https://res.cloudinary.com/drpge2a0c/image/upload/v1697553463/assets/backgrounds/doctor_9_400x400_g3a9hw.jpg'
              alt="doctor"
              className="w-full h-full ps-0 rounded-lg"
              style={{ opacity: darkMode ? 0.7 : 1 }}
            />
          </div>
          <Link to="/login">
            <button
              className="bg-black text-white h-12 w-28 rounded-2xl  hover:bg-white hover:text-black -mt-8"
              style={{
                fontFamily: "Open Sans, sans-serif",
                opacity: darkMode ? 0.8 : 1,
              }}>
              {t("LANDING PAGE.SERVICES.CHECKOUT.BUTTON")}
            </button>
          </Link>
        </div>
      </div>
      {/* AVAILABLE SERVICES */}
      <div className="h-[250px]">
        <AvailableServices />
      </div>
      {/* SPECIALTIES */}
      <div>
        <Specialties />
      </div>
      {/*  SECCIÓN DE DOCTORES SE RENDERIZAN LAS CARDS CON EFECTO HOVER AL HACER CLICK NOS LLEVA AL DETAIL DE CADA DOCTOR */}
      <div
        id="services"
        className="p-4 max-w-screen-xl  mx-auto h-[200px] flex flex-col items-center ">
        <h3
          className="text-black text-[30px] text-center pt-1 mb-1 font-semibold"
          style={{
            fontFamily: "Rubik, sans-serif",
            color: darkMode ? "white" : "",
          }}>
          {t("LANDING PAGE.DOCTORS CARDS.DESCRIPTION 1")}
        </h3>
        <p
          className="mt-8 text-2xl text-center mb-1"
          style={{ fontFamily: "Open Sans, sans-serif" }}>
          {t("LANDING PAGE.DOCTORS CARDS.DESCRIPTION 2")}
        </p>
      </div>
      <Cards />
      {/*  SPONSORS */}
      <div>
        <Sponsors />
      </div>
      {/*  LOCATIONS */}
      <div id="locations">
        <Location />
      </div>
      {/*SECCIÓN DE NEWSLETTER */}
      <div className="max-w-full w-full">
        <Newsletter />
      </div>
      <ScrollToTop smooth />
      {/*  SOCIAL MEDIA */}
      <Footer />
    </div>
  );
};
export default Landing;
