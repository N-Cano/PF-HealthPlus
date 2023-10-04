import { FaUserDoctor } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";

const AvailableServices = () => {
  return (
    <div>
      <h2
        className="text-[30px] text-center pt-2 mt-3 mb-0 font-semibold"
        style={{ fontFamily: "Rubik, sans-serif" }}>
        AVAILABLE SERVICES
      </h2>
      <div className="grid grid-cols-3 h-[400px] text-center">
        <div className=" flex flex-col justify-center items-center">
          <FaUserDoctor />
          <h3
            className="text-2xl mt-2"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            GENERAL PRACTICES
          </h3>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <FaBriefcaseMedical />
          <h3
            className="text-2xl mt-2"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            DIAGNOSIS
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaHospital />
          <h3
            className="text-2xl mt-2"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            TREATMENT
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AvailableServices;
