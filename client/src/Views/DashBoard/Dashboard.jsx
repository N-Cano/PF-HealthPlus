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
import SideNavbar from "../../Components/NavBar/NavBarDesp";

const DashBoard = () => {
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
        <div className="flex-1 p-4 rounded-lg shadow-md my-7 mx-2 md:my-6 md:mr-2 md:ml-2 md:pb-12 h-10">
          <h3
            className="mt-5 text-center text-2xl font-bold"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            DOCTORS
          </h3>

          {/* AQUI VAN LAS CARDS Y CON CLICK MAS DETALLES DEL DOCTOR */}
          <div>
            <SearchBar />

            <select
              className="bg-sky-200/100 ... rounded-lg w-[100px]"
              onChange={filterSpecial}
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <option
                value="allDocs"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                allDocs
              </option>
              <option
                value="Dermatology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Dermatology
              </option>
              <option
                value="Rheumatology"
                className="font-bold"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Rheumatology
              </option>
              <option
                value="Psychiatry"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Psychiatry
              </option>
              <option
                value="Gastroenterology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Gastroenterology
              </option>
              <option
                value="Endocrinology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Endocrinology
              </option>
              <option
                value="Radiology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Radiology
              </option>
              <option
                value="Urology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Urology
              </option>
              <option
                value="cardiology"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Cardiology
              </option>
            </select>
            <select
              className="bg-sky-200/100 ... rounded-lg w-[100px]"
              onChange={handleOrder}
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <option
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Order
              </option>
              <option
                value="A"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                A-Z
              </option>
              <option
                value="D"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Z-A
              </option>
            </select>

            <select
              className="bg-sky-200/100 ... rounded-lg w-[100px]"
              onChange={handlePrice}
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <option
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Price
              </option>
              <option
                value="Top"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Price Top
              </option>
              <option
                value="Low"
                className="font-bold text-center"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Price Low
              </option>
            </select>
          </div>
          <div className="bg-blue-200 ... rounded-lg "></div>
          <DocsCards />
        </div>
      </div>
      <div>
        <Link to={"/postdocs"}>
          <button>CREAR DOCTOR</button>
        </Link>
      </div>
      <div
        id="doctors"
        className="flex flex-col md:flex-row mt-80 md:items-center md:justify-center"
      >
        <div>
          {/* AQUI VAN LAS CARDS Y CON CLICK MAS DETALLES DEL DOCTOR */}
          <div></div>
        </div>
      </div>

      <SideNavbar />
      <Footer />
    </div>
  );
};
export default DashBoard;
