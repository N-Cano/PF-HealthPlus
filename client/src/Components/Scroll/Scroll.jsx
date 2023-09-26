// import React from "react";

const Scroll = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        onClick={() => {
          scrollToSection("about");
        }}>
        About
      </button>
      <button
        onClick={() => {
          scrollToSection("doctors");
        }}>
        Services
      </button>
      <button
        onClick={() => {
          scrollToSection("services");
        }}>
        Doctors
      </button>
      <button
        onClick={() => {
          scrollToSection("locations");
        }}>
        Locations
      </button>
    </>
  );
};

export default Scroll;
