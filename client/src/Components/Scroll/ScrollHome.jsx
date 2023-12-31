import { useTranslation } from "react-i18next";

const ScrollHome = () => {
  const { t } = useTranslation();

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        style={{ fontFamily: "Rubik, sans-serif" }}
        onClick={() => {
          scrollTo("news");
        }}
      >
        {t("HOME PAGE.NAVBAR.SCROLL HOME.NEWS")}
      </button>

      <button
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        style={{ fontFamily: "Rubik, sans-serif" }}
        onClick={() => {
          scrollTo("doctors");
        }}
      >
        {t("HOME PAGE.NAVBAR.SCROLL HOME.PROFESSIONALS")}
      </button>

      <button
        className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2  text-sm font-medium"
        style={{ fontFamily: "Rubik, sans-serif" }}
        onClick={() => {
          scrollTo("services");
        }}
      >
        {t("HOME PAGE.NAVBAR.SCROLL HOME.SERVICES")}
      </button>
    </div>
  );
};

export default ScrollHome;
