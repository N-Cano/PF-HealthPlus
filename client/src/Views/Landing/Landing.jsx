import banner from "../../assets/backgrounds/doctor 1 sin fondo.png";
import about1 from "../../assets/backgrounds/doctor 3.jpg";
import about2 from "../../assets/backgrounds/doctor 4.jpg";
import NavBar from "../../Components/NavBar/NavBar";
import Scroll from "../../Components/Scroll/Scroll";
import ScrollToTop from "react-scroll-to-top";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { NavBar, Footer, SlidesBanner, Sponsors } from "../../Components/index";
import availableService1 from "../../assets/backgrounds/doctor 2.jpg";
import availableService2 from "../../assets/backgrounds/doctor 5.jpg";
import availableService3 from "../../assets/backgrounds/doctor 9.jpg";
import Cards from "../../Components/CardsComponent/Cards/Cards";


const Landing = () => {
  return (
    <>
      {/* AQUÍ VA EL SCROLL*/}
      {/* AQUÍ VA EL NAVBAR CON EL LOGIN DESDE EL APP.JSX*/}
      {/* AQUÍ VA EL COMPONENTE DE CAMBIO DE IDIOMA*/}
      {/* AQUÍ VA EL COMPONENTE DE CAMBIO DE DARKMODE*/}
      <NavBar />


      {/* BANNER COMO SLIDES */}
      <SlidesBanner />


      {/* ABOUT US  1*/}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:pb-12 h-96">
          <h3 className="mt-5 text-center text-2xl">WHAT DO WE DO?</h3>
          <p className="mt-5 text-center">
            {`At HealthPlus we are dedicated to you, and your health. Our aim is to
      provide fast, easy and patient-oriented services. Our doctors’
      priority are the patients and their families.`}
          </p>
        </div>


        <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:flex md:flex-col md:justify-center md:pb-12 h-96">
          <h3 className="mt-5 text-center text-2xl">OUR COMMUNITY</h3>
          <p className="mt-5 text-center">
            We are a professional clinic with a long trajectory based in the
            United States, with a large coverage, elite service, and a
            professional staff.
          </p>
          <div className="flex-grow"></div>
          <div className="mt-4 text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">{`DOCTORS >`}</button>
          </div>
        </div>
        <h2>APPOINTMENTS</h2>
      </div>
      <div>
        <h2>DOCTORS</h2>
      </div>
      <div>
        <h2>Schedule your FREE checkout</h2>
        <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:flex md:flex-col md:justify-center md:pb-12 h-96">
          <h3 className="mt-5 text-center text-2xl">CONTACT US</h3>
          <p className="mt-5 text-center">Here you can get in touch with us.</p>
          <div className="flex-grow"></div>
          <div className="mt-4 text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">{`LOCATIONS >`}</button>
          </div>
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
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div>
            <div className="bg-blue-600 w-full rounded-lg h-12 flex items-center justify-center">
              <h2 className="text-white text-center">APPOINTMENTS</h2>
            </div>
            <div className="h-68 aspect-w-16 aspect-h-9 mb-0">
              <img
                src={availableService1}
                alt="doctor"
                className="w-full h-full object-center"
              />
            </div>
          </div>
          <button className="bg-black text-white h-12 w-28 rounded-2xl mt-32">
            here
          </button>
        </div>
        <div className="bg-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div>
            <div className="bg-blue-600 w-11/12 rounded-lg h-12 flex items-center justify-center">
              <h2 className="text-white text-center">DOCTORS</h2>
            </div>
            <div className="h-68 aspect-w-16 aspect-h-9">
              <img
                src={availableService2}
                alt="doctor"
                className="w-50 h-50 object-cover"
              />
            </div>
          </div>
          <button className="bg-black text-white h-12 w-28 rounded-2xl mt-2">
            here
          </button>
        </div>
        <div className="bg-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
          <div>
            <div className="bg-blue-600 w-full rounded-lg h-12 flex items-center justify-center">
              <h2 className="text-white text-center">
                Schedule your FREE checkout
              </h2>
            </div>
            <div className="h-68 aspect-w-16 aspect-h-9">
              <img
                src={availableService3}
                alt="doctor"
                className="w-50 h-50 object-cover"
              />
            </div>
          </div>
          <button className="bg-black text-white h-12 w-28 rounded-2xl mt-2">
            here
          </button>
        </div>
      </div>


      {/* AVAILABLE SERVICES */}
      <div className="bg-blue-200 h-96 ">
        <h2 className="text-4xl text-center pt-2">AVAILABLE SERVICES</h2>
      </div>


      {/* SPECIALTIES */}
      <div className="bg-blue-300 h-96 ">
        <h2 className="text-4xl text-center pt-2">SPECIALTIES</h2>
      </div>


      {/*  SECCIÓN DE DOCTORES SE RENDERIZAN LAS CARDS CON EFECTO HOVER AL HACER CLICK NOS LLEVA AL DETAIL DE CADA DOCTOR */}
      <div className="bg-white p-4 shadow-md w-100 h-[1200px] flex flex-col items-center">
        <h3 className="text-black text-7xl text-center pt-2">
          The best doctors give you the best care
        </h3>
        <p className="mt-8 text-4xl text-center">
          Devotion, professionalism and hard work are the essence of our team of
          experienced doctors, nurses and care assistants․
        </p>
      </div>


      {/*  LOCATIONS PUEDE SER UN COMPONENTE APARTE */}
      <div className="bg-blue-400 p-4  shadow-md w-100 h-48 grid grid-cols-2">
        <div>
          <div>
            <img></img>
            <p>Kr 20 Saint Lou</p>
          </div>
          <div>
            <img></img>
            <p>{`+(1) 7-25`}</p>
          </div>
          <div>
            <img></img>
            <p>healthplushclinic@gmail.com</p>
          </div>
        </div>
      </div>


      {/*  SPONSORS */}
      <Sponsors />


      {/*  SOCIAL MEDIA */}
      <Footer />
    </>
  );
};
export default Landing;
