import Footer from "../../Components/Footer/Footer";
import { filterSpeciality, orderCards, ratingCards } from "../../redux/actions";
import SearchBarUsers from "../../Components/Utils/SearchBar/SearchBarUsers";
import { useDispatch } from "react-redux";
import CardsUsers from "../../Components/CardsUsers/CardsUsers";
import SideNavbar from "../../Components/NavBar/NavBarDesp";
const DashBoardUsers = () => {
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
    <div className="bg-blue-200 h-screen flex flex-col justify-between">
      <div
        id="doctors"
        className="flex flex-col md:flex-row md:items-center md:justify-center"
      >
        <div>
          <h3 className="mt-5 text-center text-2xl font-bold font-['Rubik, sans-serif']">
            USERS
          </h3>

          <div className="mb-8">
            <SearchBarUsers />
          </div>
          <div className="flex flex-row justify-around bg-blue-400 py-6 rounded-2xl font-bold text-center">
            <p className="text-xl w-[300px]">Name</p>
            <p className="text-xl w-[300px]">Last Name</p>
            <p className="text-xl w-[300px]">Email</p>
          </div>
          <CardsUsers />
        </div>
      </div>
      <SideNavbar />
      <Footer />
    </div>
  );
};
export default DashBoardUsers;
