import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDoctorName, getDoctors } from "../../redux/actions";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";

export default function SearchBar() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }
  function handleSubmit() {
    name.length === 0 ? dispatch(getDoctors()) : dispatch(getDoctorName(name));
    setName("");
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(getDoctorName(name));
      setName("");
    }
  };
  return (
    <div className="flex items-center mx-1">
      <input
        placeholder={t("HOME PAGE.SEARCHBAR.PLACEHOLDER")}
        onChange={handleInputChange}
        type="search"
        value={name}
        className="bg-sky-200/100 rounded-2xl h-[42px] flex-grow mr-3 mt-1 px-2 w-[300px] font-['Open Sans', sans-serif]"
        style={{
          background: darkMode ? "#00519C" : "",
        }}
        onKeyDown={handleKeyPress}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className="bg-black rounded-2xl text-white ml-[-85px] mt-1 h-[40px] w-[73px] py-1 font-['Open Sans', sans-serif]"
      >
        {t("HOME PAGE.SEARCHBAR.BUTTON")}
      </button>
    </div>
  );
}
