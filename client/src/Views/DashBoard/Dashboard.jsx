import { filterSpeciality, orderCards, ratingCards } from "../../redux/actions";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import DocsCards from "../../Components/CardsDocDash/DocsCards";
import { Link } from "react-router-dom";
import SideNavbar from "../../Components/NavBar/NavBarDesp";
import { useTheme } from "../../contextAPI/ThemeContext";

const DashBoard = () => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();

  const filterSpecial = (event) => {
    dispatch(filterSpeciality(event.target.value));
  };
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };
  const handleRating = (event) => {
    dispatch(ratingCards(event.target.value));
  };

  return (
    <div
      className="bg-blue-200 min-h-[1080px]"
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
            <p className="text-xl w-[300px]">Id:</p>
          </div>
          <DocsCards />
        </div>
      </div>
      <SideNavbar />
    </div>
  );
};
export default DashBoard;
