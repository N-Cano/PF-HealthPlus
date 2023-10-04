import React from "react";
import { Link } from "react-router-dom";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-content">
          <h2>¡Take care of the you, and the people you love!</h2>
          <p>
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