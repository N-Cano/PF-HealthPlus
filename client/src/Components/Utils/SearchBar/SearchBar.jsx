import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDoctorName, getDoctors } from "../../../redux/actions";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value); //setea el valor ingresado
  }
  function handleSubmit() {
    name.length === 0 ? dispatch(getDoctors()) : dispatch(getDoctorName(name)); //name es lo q está escribiendo el usuario
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
        className="bg-sky-200/100 rounded-2xl h-[42px] flex-grow mr-3 mt-1 px-2 w-[300px]"
        style={{ fontFamily: "Open Sans, sans-serif" }}
        onKeyDown={handleKeyPress}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className="bg-black rounded-2xl text-white ml-[-85px] mt-1 h-[40px] w-[73px] py-1">
        {t("HOME PAGE.SEARCHBAR.BUTTON")}
      </button>
    </div>
  );
}
