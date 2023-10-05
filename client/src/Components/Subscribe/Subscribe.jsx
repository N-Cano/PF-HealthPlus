import { Link } from "react-router-dom";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe-section w-full">
      <div className="subscribe-container w-[600px]">
        <div className="subscribe-content">
          <h2 style={{ fontFamily: "Rubik, sans-serif" }}>
            ¡Take care of the you, and the people you love!
          </h2>
          <p style={{ fontFamily: "Rubik, sans-serif" }}>
            Includes: access to all of our specialties, free monthly checkout,
            virtual assistance and more!{" "}
          </p>
          {/* Agrega más contenido según tus necesidades */}
        </div>
        <div className="subscribe-image"></div>
        <div className="subscribe-circle">
          <Link to="/payment">
            <div className="circle-link"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
