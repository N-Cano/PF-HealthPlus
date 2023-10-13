import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsersName, getUsers } from "../../../redux/actions";

export default function SearchBarUsers() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit() {
    name.length === 0 ? dispatch(getUsers()) : dispatch(getUsersName(name));
    setName("");
  }

  return (
    <div className="flex flex-row items-center justify-center m-4">
      <input
        placeholder="Search by breed name"
        onChange={handleInputChange}
        value={name}
        className="bg-gray-100 rounded-lg h-10 w-[300px] mr-3 mt-1 px-1"
        style={{ fontFamily: "Open Sans, sans-serif" }}
      />
      <button
        type="button" // Cambiado a type="button"
        onClick={handleSubmit}
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className="bg-black rounded-lg text-white mt-2 w-[75px] py-1"
      >
        Search
      </button>
    </div>
  );
}
