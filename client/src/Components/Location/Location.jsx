import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
// import Map from "./Map/Map";
import MapLeaflet from "./MapLeaflet/MapLeaflet";
import SearchBox from "./MapLeaflet/SearchBox";
import { useState } from "react";
import MapLeafletSearch from "./MapLeaflet/MapLeafletSearch";

const Location = () => {
  const [selectPosition, setSelectPosition] = useState(null);
  console.log("selectPosition: ", selectPosition);

  return (
    <div className="bg-blue-400 p-4 shadow-md w-full h-[700px] grid grid-cols-2 gap-3">
      <div className="bg-white flex w-[280px] h-[200px] flex-col gap-3 items-center justify-center rounded-3xl mt-[10px]">
        <HiOutlineLocationMarker size={21} />
        <p className="text-1xl">{`Tv. 100a #80a-50, Bogotá`}</p>
        <HiOutlinePhoneOutgoing size={21} />
        <p className="text-1xl">{`+(1) 7-25`}</p>
        <AiOutlineMail size={21} />
        <p className="text-1xl">healthplushclinic@gmail.com</p>
      </div>
      <SearchBox
        selectPosition={selectPosition}
        setSelectPosition={setSelectPosition}
      />

      <MapLeaflet />
      <MapLeafletSearch selectPosition={selectPosition} />
      {/* <Map /> */}
    </div>
  );
};

export default Location;
