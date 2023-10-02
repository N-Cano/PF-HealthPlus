import { FaUserDoctor } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";

const AvailableServices = () => {
  return (
    <div className="grid grid-cols-3 h-[500px] text-center">
      <div className="bg-blue-400 flex flex-col justify-center items-center">
        <FaUserDoctor />
        <h3 className="text-2xl mt-2">GENERAL PRACTICES</h3>
      </div>
      <div className="bg-blue-600 flex flex-col justify-center items-center">
        <FaBriefcaseMedical />
        <h3 className="text-2xl mt-2">DIAGNOSIS</h3>
      </div>
      <div className="bg-blue-300 flex flex-col justify-center items-center">
        <FaHospital />
        <h3 className="text-2xl mt-2">TREATMENT</h3>
      </div>
    </div>
  );
};

export default AvailableServices;
