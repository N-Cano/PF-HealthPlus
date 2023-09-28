import banner from "../../assets/backgrounds/doctor 1 sin fondo.png";
import about1 from "../../assets/backgrounds/doctor 3.jpg";
import about2 from "../../assets/backgrounds/doctor 4.jpg";
import NavBar from "../../Components/NavBar/NavBar";
import Scroll from "../../Components/Scroll/Scroll";
import ScrollToTop from "react-scroll-to-top";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Cards from "../../Components/Doctors/Cards/Cards"

const Landing = () => {
  return (
    <>
      <h1>PARTE SUPERIOR</h1>
      {/* AQUÍ VA EL SCROLL*/}
      <NavBar />
      {/* AQUÍ VA EL NAVBAR CON EL LOGIN DESDE EL APP.JSX*/}
      {/* AQUÍ VA EL COMPONENTE DE CAMBIO DE IDIOMA*/}
      {/* AQUÍ VA EL COMPONENTE DE CAMBIO DE DARKMODE*/}
      <hr />

      <div className="bg-blue-700 p-4 rounded-lg shadow-md w-100 h-48 grid grid-cols-2">
        <p className="col">
          We offer a wide variety of services to comply with your needs! Because
          if you care, we care.
        </p>
        <img src={banner} alt="banner" className="w-32 h-32"></img>
      </div>

      <div id="about">
        <h3>WHAT DO WE DO?</h3>
        <p>
          {`At HealthPlus we are dedicated to you, and your health. Our aim is to
          provide fast, easy and patient-oriented services. Our doctors
          priority are the patients and their families.`}
        </p>

        <h3>OUR COMMUNITY</h3>
        <p>
          We are a professional clinic with a long trajectory based in the
          United States, with a large coverage, elite service and a professional
          staff.
        </p>
      </div>

      <div id="doctors">
        <h3>{`DOCTORS >`}</h3>
      </div>

      <div>
        <h3>CONTACT US</h3>
        <p>Here you can get in touch we us.</p>
        <h3>{`DOCTORS >`}</h3>
      </div>

      <div>
        <div>
          <p>
            HealthPlus is a private medical center that focuses in serving its
            associates by providing the best services.
          </p>
          <img src={about1} alt="about1"></img>
        </div>
        <div>
          <p>
            HealthPlus offers you a new experience in healthcare, you can become
            part of our family at any time.
          </p>
          <img src={about2} alt="about2"></img>
        </div>
      </div>

      {/*  SERVICES */}
      <div id="services">
        <h2>OUR SERVICES</h2>
        <p>
          We are committed to the well-being of our patients, taking care of the
          diagnosis, treatment and prevention of diseases in both children and
          adults.
        </p>
      </div>
      {/*  CMPONENTES INDIVIDUALES DE APPOINTMENTS , DOCTORS , SCHEDULE YOUR FREE APPOINTMENT  */}

      <div>
        <h2>APPOINTMENTS</h2>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <h2>Schedule your FREE checkout</h2>
      </div>

      {/*  AVAILABLE SERVICES */}

      <div>
        <div>
          <BeakerIcon className="h-6 w-6 text-blue-500" />
          <h2>GENERAL PRACTICE</h2>
        </div>
        <div>
          <h2>DIAGNOSIS</h2>
        </div>
        <div>
          <h2>TREATMENT</h2>
        </div>
      </div>

      {/*  SPECIALTIES */}
      <div>
        <div>
          <h2>Cardiology</h2>
          <p>
            Our clinic has a specialized cardiology department equipped with the
            latest technologies to guarantee complete and high-quality treatment
            for our patients.
          </p>
        </div>
        <div>
          <h2>Neurology</h2>
          <p>
            Our clinic has a specialized cardiology department equipped with the
            latest technologies to guarantee complete and high-quality treatment
            for our patients.
          </p>
        </div>
        <div>
          <h2>Orthopedics</h2>
          <p>
            Our clinic has a specialized cardiology department equipped with the
            latest technologies to guarantee complete and high-quality treatment
            for our patients.
          </p>
        </div>
        <div>
          <button>View More</button>
        </div>
      </div>

      {/*  SECCIÓN DE DOCTORES SE RENDERIZAN LAS CARDS CON EFECTO HOVER AL HACER CLICK NOS LLEVA AL DETAIL DE CADA DOCTOR */}

      <div>
        <h3>The best doctors give you the best care</h3>
        <p>
          Devotion, professionalism and hard work are the essence of our team of
          experienced doctors, nurses and care assistants
        </p>
      </div>

      {/*  LOCATIONS PUEDE SER UN COMPONENTE APARTE */}
      <div id="locations">
        <h2>LOCATIONS</h2>
      </div>

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

      <ScrollToTop smooth />

      {/*  SPONSORS */}

      <div></div>

      {/*  SOCIAL MEDIA */}
      <footer></footer>
    </>
  );
};
export default Landing;
