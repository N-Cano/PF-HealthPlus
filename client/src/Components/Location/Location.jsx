import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
// import Map from "./Map/Map";
import MapLeaflet from "./MapLeaflet/MapLeaflet";

const Location = () => {
  return (
    <div className="bg-blue-400 p-4 shadow-md w-full h-[436px] grid grid-cols-2 gap-3 ">
      <div className="bg-white w-68 flex h-[400px] flex-col gap-3 items-center justify-center rounded-3xl">
        <CiLocationOn size={21} />
        <p className="text-2xl">Kr 20 Saint Lou</p>
        <HiOutlinePhoneOutgoing size={21} />
        <p className="text-2xl">{`+(1) 7-25`}</p>
        <AiOutlineMail size={21} />
        <p className="text-2xl">healthplushclinic@gmail.com</p>
      </div>
      <div className="h-68">
        {/* <Map /> */}
        <MapLeaflet />
      </div>
    </div>
  );
};

export default Location;
