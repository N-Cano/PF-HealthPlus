/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

const SearchBox = ({ selectPosition, setSelectPosition }) => {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  return (
    <div>
      <div className=" flex flex-col justify-center items-center mb-[20px]">
        <label className="relative">
          <input
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            type="text"
            className="h-12 w-96 text-2xl bg-black border-2 rounded-lg border-white border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200"
          />
          <span className="text-1xl text-white text-opacity-80 absolute left-0 top-3 mx-6 px-2 transition duration-200 input-text">
            Write here
          </span>
        </label>
        <button
          className="bg-blue-700 rounded-lg h-7 w-32"
          onClick={() => {
            // Search
            const params = {
              q: searchText,
              format: "json",
              addressdetails: 1,
              polygon_geojson: 0,
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
              method: "GET",
              redirect: "follow",
            };
            fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
              .then((response) => response.text())
              .then((result) => {
                console.log(JSON.parse(result));
                setListPlace(JSON.parse(result));
              })
              .catch((err) => console.log("err: ", err));
          }}>
          Search
        </button>
        <select className="mt-1 w-[100px]">
          <option defaultValue={0} disabled>
            Resultados
          </option>
          {listPlace.map((item) => (
            <option
              key={item?.place_id}
              onClick={() => {
                setSelectPosition(item);
              }}>
              {item?.display_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBox;

// https://www.youtube.com/watch?v=rmIhGPy8rSY
