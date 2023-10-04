import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import {
  Footer,
  SlidesBanner,
  Sponsors,
  Location,
  AvailableServices,
  Newsletter,
} from "../../Components/index";
import availableService1 from "../../assets/backgrounds/doctor_6_1_400x400.jpg";
import availableService2 from "../../assets/backgrounds/doctor_2_400x400.jpg";
import availableService3 from "../../assets/backgrounds/doctor_9_400x400.jpg";
import ScrollToTop from "react-scroll-to-top";
import NavBar from "../../Components/NavBar/NavBar";
import Specialties from "../../Components/Specialties/Specialties";

import Cards from "../../Components/CardsComponent/Cards/Cards";

// import about1 from "../../assets/backgrounds/doctor 3.jpg";
// import about2 from "../../assets/backgrounds/doctor 4.jpg";
// import Scroll from "../../Components/Scroll/Scroll";
// import { filterSpeciality, orderCards, priceCards } from "../../redux/actions";
// import SearchBar from "../../Components/Utils/SearchBar/SearchBar";

const Landing = () => {
  // const dispatch = useDispatch();
  // const filterSpecial = (event) => {
  //   dispatch(filterSpeciality(event.target.value)); //llama a las funciones con el valor dado
  // };
  // const handleOrder = (e) => {
  //   //dispatch del asc y desc
  //   dispatch(orderCards(e.target.value));
  // };
  // const handlePrice = (event) => {
  //   dispatch(priceCards(event.target.value));
  // };

  return (
    <div
      style={{
        background: "linear-gradient(45deg, #71b7e6, #f6f6f6)",
        boxShadow: "7px 6px 30px #8ccef5",
      }}>
      <NavBar />

      {/* BANNER COMO SLIDES */}
      <SlidesBanner />

      {/* ABOUT US  1*/}
      <div
        id="about"
        className="flex flex-col md:flex-row md:items-center md:justify-center">
        <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:pb-12 h-48">
          <h3 className="mt-5 text-center text-2xl">WHAT DO WE DO?</h3>
          <p className="mt-5 text-center">
            {`At HealthPlus we are dedicated to you, and your health. Our aim is to
      provide fast, easy and patient-oriented services. Our doctors'
      priority are the patients and their families.`}
          </p>
        </div>

        <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:flex md:flex-col md:justify-center md:pb-12 h-48">
          <h3 className="mt-5 text-center text-2xl">OUR COMMUNITY</h3>
          <p className="mt-5 text-center">
            We are a professional clinic with a long trajectory based in the
            United States, with a large coverage, elite service, and a
            professional staff.
          </p>
          <div className="flex-grow"></div>
        </div>

        <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:flex md:flex-col md:justify-center md:pb-12 h-48">
          <h3 className="mt-5 text-center text-2xl">CONTACT US</h3>
          <p className="mt-5 text-center">Here you can get in touch with us.</p>
          <div className="flex-grow"></div>
        </div>
      </div>

      {/* ABOUT US 2*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1 ">
        <div
          className="relative rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 h-auto md:h-96"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="absolute inset-0 bg-black opacity-70 text-white p-4 rounded-lg group-hover:opacity-100 z-10 flex justify-center items-center">
            <p className="mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
              HealthPlus is a private medical center that focuses on serving its
              associates by providing the best services.
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
              <p className="mb-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                HealthPlus offers you a new experience in healthcare, and you
                can become part of our family at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  SERVICES */}
      <div id="doctors" className="grid grid-cols-3 gap-4 ">
        <div className="bg-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div>
            <div className="bg-blue-900 w-full rounded-lg h-12 flex items-center justify-center">
              <h2 className="text-white text-center">APPOINTMENTS</h2>
            </div>
            <img
              src={availableService1}
              alt="doctor"
              className="w-full h-full ps-4"
            />
          </div>
          <Link to="/login">
            <button className="bg-black text-white h-12 w-28 rounded-2xl mt-2 hover:bg-white hover:text-black">
              here
            </button>
          </Link>
        </div>
        <div className="bg-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div>
            <div className="bg-blue-900 w-full rounded-lg h-12 flex items-center justify-center">
              <h2 className="text-white text-center">DOCTORS</h2>
            </div>
            <img
              src={availableService2}
              alt="doctor"
              className="w-full h-full ps-4"
            />
          </div>
          <Link to="/login">
            <button className="bg-black text-white h-12 w-28 rounded-2xl mt-2 hover:bg-white hover:text-black">
              here
            </button>
          </Link>
        </div>
        <div className="bg-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div>
            <div className="bg-blue-900 w-full rounded-lg h-12 flex items-center justify-center">
              <h2 className="text-white text-center">
                SCHEDULE YOUR FREE CHECKOUT
              </h2>
            </div>
            <img
              src={availableService3}
              alt="doctor"
              className="w-full h-full ps-4"
            />
          </div>
          <Link to="/login">
            <button className="bg-black text-white h-12 w-28 rounded-2xl mt-2 hover:bg-white hover:text-black">
              here
            </button>
          </Link>
        </div>
      </div>

      {/* AVAILABLE SERVICES */}
      <div className="h-[550px] ">
        <h2 className="text-4xl text-center pt-2 mt-3 mb-3">
          AVAILABLE SERVICES
        </h2>
        <AvailableServices />
      </div>

      {/* SPECIALTIES */}
      <div className="h-[550px]">
        <Specialties />
      </div>

      {/*  SECCIÓN DE DOCTORES SE RENDERIZAN LAS CARDS CON EFECTO HOVER AL HACER CLICK NOS LLEVA AL DETAIL DE CADA DOCTOR */}
      <div
        id="services"
        className="p-4 shadow-md w-100 h-[700px] flex flex-col items-center">
        <h3 className="text-black text-5xl text-center pt-2">
          The best doctors give you the best care
        </h3>
        <p className="mt-8 text-4xl text-center">
          Devotion, professionalism and hard work are the essence of our team of
          experienced doctors, nurses and care assistants.
        </p>

        {/* <div>
        <select className="bg-sky-200/100 ... rounded-lg " onChange={filterSpecial}>
        <option value="allDocs">allDocs</option>
        <option value="Dermatology">Dermatology</option>
        <option value="Rheumatology">Rheumatology</option>
        <option value="Psychiatry">Psychiatry</option>
        <option value="Gastroenterology.">Gastroenterology</option>
        <option value="Endocinology">Endocinology</option>
        <option value="Radiology">Radiology</option>
        <option value="Urology">Urology</option>
        <option value="cardiology">Cardiology</option>      
      </select>
      <select className="bg-sky-200/100 ... rounded-lg " onChange={handleOrder}>
                    <option>Order</option>
                    <option value='A'>A-Z</option>
                    <option value='D'>Z-A</option>
            </select>
            
            <select className="bg-sky-200/100 ... rounded-lg " onChange={handlePrice}>
                    <option>Price</option>
                    <option value='Top'>Price Top</option>
                    <option value='Low'>Price Low</option>
            </select>
            </div>
            <div className="bg-blue-200 ... rounded-lg ">
            <SearchBar />
            </div> */}

        <Cards />
      </div>
      {/*  SPONSORS */}
      <div>
        <Sponsors />
      </div>

      {/*  LOCATIONS */}
      <div id="locations">
        <Location />
      </div>

      {/*SECCIÓN DE NEWSLETTER */}
      <div className="w-full">
        <Newsletter />
      </div>
      <ScrollToTop smooth />

      {/*  SOCIAL MEDIA */}
      <Footer />
    </div>
  );
};
export default Landing;
