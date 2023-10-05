import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDoctorName, getDoctors } from "../../../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value); //setea el valor ingresado
  }
  function handleSubmit() {
    name.length === 0 ? dispatch(getDoctors()) : dispatch(getDoctorName(name)); //name es lo q está escribiendo el usuario
    setName("");
  }
  return (
    <div
      type="search"
      className="flex flex-col items-center justify-center mx-1">
      <input
        placeholder="Search by breed name"
        onChange={handleInputChange}
        type="search"
        value={name}
        className="bg-gray-100 rounded-lg h-10 w-[300px] mr-3 mt-1 px-1"
        style={{ fontFamily: "Open Sans, sans-serif" }}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className="bg-black rounded-lg text-white mt-2 w-[75px] py-1">
        Search
      </button>
    </div>
  );
}
