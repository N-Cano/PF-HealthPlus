import React, { useEffect, useRef } from "react";
import "./Darkmode.css";

const Darkmode = () => {
  const toggleBtnRef = useRef(null);
  const themeRef = useRef(null);

  useEffect(() => {
    const toggleBtn = toggleBtnRef.current;
    const theme = themeRef.current;
    let darkMode = localStorage.getItem("dark-mode");

    const enableDarkMode = () => {
      theme.classList.add("dark-mode-theme");
      toggleBtn.classList.remove("dark-mode-toggle");
      localStorage.setItem("dark-mode", "enabled");
    };

    const disableDarkMode = () => {
      theme.classList.remove("dark-mode-theme");
      toggleBtn.classList.add("dark-mode-toggle");
      localStorage.setItem("dark-mode", "disabled");
    };

    if (darkMode === "enabled") {
      enableDarkMode(); // set state of darkMode on page load
    }

    toggleBtn.addEventListener("click", () => {
      darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
      if (darkMode === "disabled") {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });

    // Cleanup event listener on component unmount
    return () => {
      toggleBtn.removeEventListener("click");
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div id="theme" ref={themeRef}>
      <button id="toggle-btn" className="dark-mode-toggle" ref={toggleBtnRef}>
        Dark mode
      </button>
    </div>
  );
};

export default Darkmode;
