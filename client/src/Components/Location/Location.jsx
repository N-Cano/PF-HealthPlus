import { HiOutlinePhoneOutgoing } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

const Location = () => {
  return (
    <div className="bg-blue-400 p-4 shadow-md w-full h-[300px] grid grid-cols-2 ">
      <div className="bg-white w-68 flex flex-col gap-3 items-center justify-center rounded-3xl">
        <CiLocationOn size={21} />
        <p className="text-2xl">Kr 20 Saint Lou</p>
        <HiOutlinePhoneOutgoing size={21} />
        <p className="text-2xl">{`+(1) 7-25`}</p>
        <AiOutlineMail size={21} />
        <p className="text-2xl">healthplushclinic@gmail.com</p>
      </div>
    </div>
  );
};

export default Location;
