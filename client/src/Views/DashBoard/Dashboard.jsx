import NavHome from "../../Components/NavBar/NavHome";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../Components/Footer/Footer";
import News from "../../Components/News/News";
import Cards from "../../Components/CardsComponent/Cards/Cards";
import { filterSpeciality, orderCards, ratingCards } from "../../redux/actions";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchBarUsers from "../../Components/SearchBar/SearchBarUsers";
import { useDispatch } from "react-redux";
import Subscribe from "../../Components/Subscribe/Subscribe";
import SpecialtiesHome from "../../Components/Specialties/SpecialtiesHome";
import DocsCards from "../../Components/CardsDocDash/DocsCards";
import CardsUsers from "../../Components/CardsUsers/CardsUsers";
import { Link } from "react-router-dom";
import SideNavbar from "../../Components/NavBar/NavBarDesp";
import { useTheme } from "../../contextAPI/ThemeContext";

const DashBoard = () => {
  const { darkMode } = useTheme();
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
      className="bg-blue-200"
      style={{ background: darkMode ? "#1E3453" : "" }}
    >
      <div
        id="doctors"
        className="flex flex-col md:flex-row md:items-center md:justify-center"
      >
        <div>
          <h3
            className="mt-5 text-center text-2xl font-bold"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            DOCTORS
          </h3>

          {/* AQUI VAN LAS CARDS Y CON CLICK MAS DETALLES DEL DOCTOR */}
          <div className="mb-8">
            <SearchBar />
          </div>
          <Link
            to={"/postdocs"}
            className="flex items-center justify-center mb-8"
          >
            <button className="bg-gray-600 p-4 rounded-2xl font-bold text-white hover:bg-gray-400 hover:scale-110 transition ease-in-out duration-300">
              Create Doctor
            </button>
          </Link>
          <div
            className="flex flex-row justify-around bg-blue-400 py-6 rounded-2xl font-bold text-center"
            style={{ background: darkMode ? "black" : "" }}
          >
            <p className="text-xl w-[300px]">Profesional</p>
            <p className="text-xl w-[300px]">Specialty</p>
            <p className="text-xl w-[300px]">Email</p>
          </div>
          <DocsCards />
        </div>
      </div>
      <SideNavbar />

      <Footer />
    </div>
  );
};
export default DashBoard;
