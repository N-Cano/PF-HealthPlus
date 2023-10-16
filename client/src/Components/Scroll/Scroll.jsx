import { useTranslation } from "react-i18next";

const Scroll = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex" style={{ fontFamily: "Rubik, sans-serif" }}>
      <button
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollToSection("about");
        }}>
        {t("LANDING PAGE.NAVBAR.SCROLL.ABOUT")}
      </button>
      <button
        className=" text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollToSection("doctors");
        }}>
        {t("LANDING PAGE.NAVBAR.SCROLL.SERVICES")}
      </button>
      <button
        className=" text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollToSection("services");
        }}>
        {t("LANDING PAGE.NAVBAR.SCROLL.PROFESSIONALS")}
      </button>
      <button
        className=" text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        onClick={() => {
          scrollToSection("locations");
        }}>
        {t("LANDING PAGE.NAVBAR.SCROLL.LOCATIONS")}
      </button>
    </div>
  );
};

export default Scroll;
