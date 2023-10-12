import { useTranslation } from "react-i18next";

const languages = {
  en: { nativeName: "English", surname: "ENG" },
  es: { nativeName: "Spanish", surname: "ESP" },
};
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Se puede implementar localstorage
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // localStorage.setItem("lng", lng);
  };

  return (
    <div
      className="text-white flex gap-0.5"
      style={{ fontFamily: "Rubik, sans-serif" }}>
      {Object.keys(languages).map((lng) => (
        <button
          className="hover:bg-gray-700 cursor-pointer hover:text-white rounded-md px-4 py-2 text-sm font-medium"
          type="submit"
          key={lng}
          onClick={() => handleChangeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}>
          {languages[lng].surname}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
