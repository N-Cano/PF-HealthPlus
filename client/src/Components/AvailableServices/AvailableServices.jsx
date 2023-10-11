import { FaUserDoctor } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AvailableServices = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2
        className="text-[30px] text-center pt-2 mt-3 mb-0 font-semibold"
        style={{ fontFamily: "Rubik, sans-serif" }}>
        {t("LANDING PAGE.AVAILABLE SERVICES.AVAILABLE SERVICES")}
      </h2>
      <div className="grid grid-cols-3 h-[400px] text-center">
        <div className=" flex flex-col justify-center items-center">
          <FaUserDoctor />
          <h3
            className="text-2xl mt-2"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            {t("LANDING PAGE.AVAILABLE SERVICES.GENERAL PRACTICES")}
          </h3>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <FaBriefcaseMedical />
          <h3
            className="text-2xl mt-2"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            {t("LANDING PAGE.AVAILABLE SERVICES.DIAGNOSIS")}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaHospital />
          <h3
            className="text-2xl mt-2"
            style={{ fontFamily: "Rubik, sans-serif" }}>
            {t("LANDING PAGE.AVAILABLE SERVICES.TREATMENT")}
          </h3>
        </div>
      </div>
    </>
  );
};

export default AvailableServices;
