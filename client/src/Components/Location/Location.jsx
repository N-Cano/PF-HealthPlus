import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import Map from "./Map/Map";
import MapLeaflet from "./MapLeaflet/MapLeaflet";

const Location = () => {
  return (
    <div className="bg-blue-400 p-4 shadow-md w-full h-[485px] grid grid-cols-2 gap-3 ">
      <div className="bg-white  h-[300px] w-[320px] flex flex-col gap-3 items-center justify-center rounded-3xl ml-[200px] mt-[68px]">
        <CiLocationOn size={21} />
        <p className="text-1xl">Kr 20 Saint Lou</p>
        <HiOutlinePhoneOutgoing size={21} />
        <p className="text-1xl">{`+(1) 7-25`}</p>
        <AiOutlineMail size={21} />
        <p className="text-1xl">healthplushclinic@gmail.com</p>
      </div>

      <div className="mr-[95px]">
        <Map />
        <MapLeaflet />
      </div>
    </div>
  );
};

export default Location;
