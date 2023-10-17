import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsersName, getUsers } from "../../redux/actions";

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
        className="bg-sky-200/100 rounded-2xl h-[42px] flex-grow mr-3 mt-1 px-2 w-[300px]"
        style={{ fontFamily: "Open Sans, sans-serif" }}
      />
      <button
        type="button"
        onClick={handleSubmit}
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className="bg-black rounded-lg text-white mt-2 w-[75px] py-1">
        Search
      </button>
    </div>
  );
}
