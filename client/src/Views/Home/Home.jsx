import NavHome from "../../Components/NavBar/NavHome";
import ScrollToTop from "react-scroll-to-top";
import News from "../../Components/News/News";
import Cards from "../../Components/CardsComponent/Cards/Cards";
import { filterSpeciality, orderCards, ratingCards } from "../../redux/actions";
import SearchBar from "../../Components/Utils/SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import Subscribe from "../../Components/Subscribe/Subscribe";
import SpecialtiesHome from "../../Components/Specialties/SpecialtiesHome";
import { useTranslation } from "react-i18next";
import Specialties from "../../Components/Specialties/Specialties";
import {
  Footer,
  SlidesBanner,
  Sponsors,
  Location,
  AvailableServices,
  Newsletter,
} from "../../Components/index";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filterSpecial = (event) => {
    dispatch(filterSpeciality(event.target.value)); //llama a las funciones con el valor dado
  };
  const handleOrder = (e) => {
    //dispatch del asc y desc
    dispatch(orderCards(e.target.value));
  };
  const handleRating = (event) => {
    dispatch(ratingCards(event.target.value));
  };

  return (
    <div
      style={{
        background: "linear-gradient(45deg, #71b7e6, #f6f6f6)",
        boxShadow: "7px 6px 30px #8ccef5",
      }}
    >
      <NavHome />

      <div
        id="doctors"
        className="flex flex-col md:flex-row mt-1 md:items-center md:justify-center max-w-screen-xl mx-auto h-full"
      >
        <div className="flex-1 p-4 rounded-lg  my-7 mx-2 md:my-6 md:mr-2 md:ml-2 md:pb-12">
          <h3
            className="mt-5 text-center text-2xl font-bold"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            {t("HOME PAGE.PROFESSIONALS.TITLE")}
          </h3>
          <p
            className="mt-5 text-center text-2xl font-normal mb-3"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            {t("HOME PAGE.PROFESSIONALS.DESCRIPTION 1")}
          </p>
          {/* AQUI VAN LAS CARDS Y CON CLICK MAS DETALLES DEL DOCTOR */}
          <div className="flex  justify-center items-center mb-4 gap-3">
            <SearchBar />
            <select
              className="bg-sky-200/100 ... rounded-lg w-[200px] h-[42px]"
              onChange={filterSpecial}
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <option
                value="allDocs"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.ALL")}
              </option>
              <option
                value="Dermatology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.DERMATOLOGY")}
              </option>
              <option
                value="Rheumatology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.RHEUMATOLOGY")}
              </option>
              <option
                value="Psychiatry"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.PSYCHIATRY")}
              </option>
              <option
                value="Gastroenterology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.GASTROENTEROLOGY")}
              </option>
              <option
                value="Endocrinology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.ENDOCRINOLOGY")}
              </option>
              <option
                value="Radiology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.RADIOLOGY")}
              </option>
              <option
                value="Urology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.UROLOGY")}
              </option>
              <option
                value="Cardiology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.CARDIOLOGY")}
              </option>
            </select>
            <select
              className="bg-sky-200/100 ... rounded-lg w-[150px] h-[42px]"
              onChange={handleOrder}
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <option
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.ORDER")}
              </option>
              <option
                value="A"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.AZ")}
              </option>
              <option
                value="D"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                {t("HOME PAGE.SELECTS.ZA")}
              </option>
            </select>
          </div>
        </div>
      </div>

      <Cards />

      <div id="services">
        <SpecialtiesHome />
      </div>

      <div id="subscribe">
        <Subscribe />
      </div>

      {/*  SPONSORS */}
      <div>
        <Sponsors />
      </div>
      <div id="locations">
        <Location />
      </div>

      <div
        id="news"
        className="flex flex-col md:flex-row md:items-center md:justify-center"
      >
        <News />
      </div>

      <ScrollToTop smooth />

      <Footer />
    </div>
  );
};
export default Home;
