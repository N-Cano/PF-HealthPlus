import NavHome from "../../Components/NavBar/NavHome";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../Components/Footer/Footer";
import News from "../../Components/News/News";
import Cards from "../../Components/CardsComponent/Cards/Cards";
import { filterSpeciality, orderCards, priceCards } from "../../redux/actions";
import SearchBar from "../../Components/Utils/SearchBar/SearchBar";
import SearchBarUsers from "../../Components/Utils/SearchBar/SearchBarUsers";
import { useDispatch } from "react-redux";
import Subscribe from "../../Components/Subscribe/Subscribe";
import SpecialtiesHome from "../../Components/Specialties/SpecialtiesHome";
import DocsCards from "../../Components/CardsDocDash/DocsCards";
import CardsUsers from "../../Components/CardsUsers/CardsUsers";
import { Link } from "react-router-dom";
const DashBoardUsers = () => {
  const dispatch = useDispatch();

  const filterSpecial = (event) => {
    dispatch(filterSpeciality(event.target.value)); //llama a las funciones con el valor dado
  };
  const handleOrder = (e) => {
    //dispatch del asc y desc
    dispatch(orderCards(e.target.value));
  };
  const handlePrice = (event) => {
    dispatch(priceCards(event.target.value));
  };

  return (
    <div
      style={{
        background: "linear-gradient(45deg, #71b7e6, #f6f6f6)",
        boxShadow: "7px 6px 30px #8ccef5",
      }}
    >
      <div id="doctors">
        <div className="flex-1 p-4 rounded-lg shadow-md my-7 mx-2 md:my-6 md:mr-2 md:ml-2 md:pb-12 h-10"></div>
      </div>

      <div
        id="doctors"
        className="flex flex-col md:flex-row mt-10 md:items-center md:justify-center"
      >
        <div>
          <h3
            className="mt-5 text-center text-2xl font-bold"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            USERS
          </h3>

          {/* AQUI VAN LAS CARDS Y CON CLICK MAS DETALLES DEL DOCTOR */}
          <div>
            <SearchBarUsers />
          </div>
          <CardsUsers />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DashBoardUsers;
