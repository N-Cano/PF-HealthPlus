import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const languages = {
  en: {
    nativeName: "",
    flagImage:
      "https://res.cloudinary.com/drpge2a0c/image/upload/v1697650442/assets/flag_uk_km0kvi.png",
  },
  es: {
    nativeName: "",
    flagImage:
      "https://res.cloudinary.com/drpge2a0c/image/upload/v1697650442/assets/flag-mexico_bflqfy.png",
  },
};
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("lng");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <div
      className="text-white flex gap-0.5"
      style={{ fontFamily: "Rubik, sans-serif" }}
    >
      {Object.keys(languages).map((lng) => (
        <button
          className="hover:bg-gray-700 cursor-pointer hover:text-white rounded-md px-4 py-2 text-sm font-medium"
          type="submit"
          key={lng}
          onClick={() => handleChangeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          <img
            src={languages[lng].flagImage}
            alt={languages[lng].nativeName}
            style={{ width: "20px", height: "20px", marginRight: "5px" }}
          />
          {languages[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
