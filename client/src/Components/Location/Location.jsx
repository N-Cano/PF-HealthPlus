import { FaMapLocationDot } from "react-icons/fa6";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import MapLeaflet from "./MapLeaflet/MapLeaflet";

const Location = () => {
  return (
    <div className="p-4 shadow-md grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="bg-white ml-[150px] md:mr-[120px] md:h-[300px] w-[700px] md:w-[320px] flex flex-col gap-3 items-center justify-center rounded-3xl mt-[50px] md:mb-0">
        <FaMapLocationDot size={21} />
        <p className="text-1xl">Kr 20 Saint Lou</p>
        <HiOutlinePhoneOutgoing size={21} />
        <p className="text-1xl">{`+(1) 7-25`}</p>
        <AiOutlineMail size={21} />
        <p className="text-1xl">healthplushclinic@gmail.com</p>
      </div>

      <div className="w-full md:mr-[95px] ">
        <MapLeaflet />
      </div>
    </div>
  );
};

export default Location;
