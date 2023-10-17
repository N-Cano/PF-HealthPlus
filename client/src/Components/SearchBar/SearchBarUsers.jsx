import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsersName, getUsers } from "../../redux/actions";
import { useTheme } from "../../contextAPI/ThemeContext";

export default function SearchBarUsers() {
  const { darkMode } = useTheme();
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
    <div className="flex items-center mx-1">
      <input
        placeholder="Search by breed name"
        onChange={handleInputChange}
        value={name}
        className="bg-sky-300/100 rounded-2xl h-[42px] flex-grow mr-3 mt-1 px-2 w-[300px] font-['Open Sans', sans-serif]"
        style={{
          fontFamily: "Open Sans, sans-serif",
          background: darkMode ? "#00519C" : "",
        }}
      />
      <button
        type="button"
        onClick={handleSubmit}
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className="bg-black rounded-2xl text-white ml-[-85px] mt-1 h-[40px] w-[73px] py-1 font-['Open Sans', sans-serif]"
      >
        Search
      </button>
    </div>
  );
}
