import React from "react";

const Scroll = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div class="flex space-x-2">
      <button
      class="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollToSection("about");
        }}
      >
        ABOUT
      </button>
      <button
       class="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollToSection("doctors");
        }}
      >
        SERVICES
      </button>
      <button
       class="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollToSection("services");
        }}
      >
        DOCTORS
      </button>
      <button
       class="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollToSection("locations");
        }}
      >
        LOCATIONS
      </button>
    </div>
  );
};

export default Scroll;
