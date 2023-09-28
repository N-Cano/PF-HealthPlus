import NavHome from "../../Components/NavBar/NavHome";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div>
      <NavHome />

      <div
        id="news"
        className="flex flex-col md:flex-row md:items-center md:justify-center"
      >
        <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:pb-12 h-96">
          <h3 className="mt-5 text-center text-2xl">NEWS</h3>
          <p className="mt-5 text-center">
            {`At HealthPlus, we care about your health. This is why we continue to implement  the latest technology. Check out fresh health news!`}
          </p>
        </div>
      </div>

      <div
        id="doctors"
        className="flex flex-col md:flex-row md:items-center md:justify-center"
      >
        <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-md my-2 mx-2 md:my-6 md:mr-2 md:ml-2 md:pb-12 h-96">
          <h3 className="mt-5 text-center text-2xl">DOCTORS</h3>
          <p className="mt-5 text-center">
            {`We work with a wide varierty of specialist, here you can find the best doctor to fit your needs. Click for more information`}
          </p>
          {/* AQUI VAN LAS CARDS Y CON CLICK MAS DETALLES DEL DOCTOR */}
        </div>
      </div>

      <ScrollToTop smooth />
    </div>
  );
};
export default Home;
