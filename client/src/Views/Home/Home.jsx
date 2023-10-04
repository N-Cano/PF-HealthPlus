import NavHome from "../../Components/NavBar/NavHome";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../Components/Footer/Footer";
import News from "../../Components/News/News";
import Cards from "../../Components/CardsComponent/Cards/Cards";
import { filterSpeciality, orderCards, priceCards } from "../../redux/actions";
import SearchBar from "../../Components/Utils/SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Specialties from "../../Components/Specialties/Specialties";

const Home = () => {
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
    <div>
      <NavHome />

      <div
        id="doctors"
        className="flex flex-col md:flex-row md:items-center md:justify-center"
      >
        <div className="flex-1  p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:pb-12 h-96">
          <h3 className="mt-5 text-center text-2xl">DOCTORS</h3>
          <p className="mt-5 text-center">
            {`We work with a wide varierty of specialist, here you can find the best doctor to fit your needs. Click for more information`}
          </p>
          {/* AQUI VAN LAS CARDS Y CON CLICK MAS DETALLES DEL DOCTOR */}
          <div>
            <SearchBar />
            <select
              className="bg-sky-200/100 ... rounded-lg "
              onChange={filterSpecial}
            >
              <option value="allDocs">allDocs</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Rheumatology">Rheumatology</option>
              <option value="Psychiatry">Psychiatry</option>
              <option value="Gastroenterology.">Gastroenterology</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Radiology">Radiology</option>
              <option value="Urology">Urology</option>
              <option value="cardiology">Cardiology</option>
            </select>
            <select
              className="bg-sky-200/100 ... rounded-lg "
              onChange={handleOrder}
            >
              <option>Order</option>
              <option value="A">A-Z</option>
              <option value="D">Z-A</option>
            </select>

            <select
              className="bg-sky-200/100 ... rounded-lg "
              onChange={handlePrice}
            >
              <option>Price</option>
              <option value="Top">Price Top</option>
              <option value="Low">Price Low</option>
            </select>
          </div>
          <div className="bg-blue-200 ... rounded-lg "></div>
          <Cards />
        </div>
      </div>

      <div className="flex-1 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:pb-12 h-96">
        <h3 className="mt-5 text-center text-2xl"></h3>
        <p className="mt-5 text-center"></p>
      </div>

      <div id="services">
        <Specialties />
      </div>

      <div id="subscribe">
        <Subscribe />
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
