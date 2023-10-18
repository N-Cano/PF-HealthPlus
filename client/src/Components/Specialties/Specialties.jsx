import { FaHandHoldingMedical } from "react-icons/fa"; // dermatology
import { GiMedicalDrip } from "react-icons/gi"; //rheumatology
import { GiBrain } from "react-icons/gi"; //Psychiatry
import { GiStomach } from "react-icons/gi"; //Gastroenterology
import { MdOutlineBloodtype } from "react-icons/md"; //Endocrinology
import { AiFillSecurityScan } from "react-icons/ai"; //Radiology
import { IoBody } from "react-icons/io5"; //Urology
import { BsFillClipboardHeartFill } from "react-icons/bs"; //Cardiology

import { useTranslation } from "react-i18next";

const Specialties = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-wrap justify-center items-center text-center py-0 px-0"
      style={{
        backgroundImage:

          'url("https://res.cloudinary.com/drpge2a0c/image/upload/v1697554297/assets/backgrounds/pexels-photo-3376790_nvxqzj.webp")',


        backgroundSize: "cover",
        flexDirection: "column",
      }}
    >
      {/* Contenido de Servicios */}
      <div style={{ backdropFilter: "blur(1px)" }}>
        <h3
          className="text-[58px] text-white font-semibold "
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          {t("LANDING PAGE.SPECIALTIES.OUR SERVICES")}
        </h3>
        <p
          className="text-lg text-white mb-4"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          {t("LANDING PAGE.SPECIALTIES.DESCRIPTION 1")}
        </p>

        {/* Lista de Especialidades */}
        <div className="text-blue-900 font-semibold flex gap-12 flex-wrap justify-center items-center h-[550px]">
          {/* Tarjeta Dermatology */}
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[30%] md:w-[250px] md:h-[250px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <FaHandHoldingMedical />
            </div>
            <h4 className="mb-1">
              {t("LANDING PAGE.SPECIALTIES.SERVICES.DERMATOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {t("LANDING PAGE.SPECIALTIES.SERVICES.DERMATOLOGY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[30%] md:w-[250px] md:h-[250px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <GiMedicalDrip />
            </div>
            <h4 className="mb-1">
              {t("LANDING PAGE.SPECIALTIES.SERVICES.RHEUMATOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {t("LANDING PAGE.SPECIALTIES.SERVICES.RHEUMATOLOGY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[30%] md:w-[250px] md:h-[250px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <GiBrain />
            </div>
            <h4 className="mb-0.5">
              {t("LANDING PAGE.SPECIALTIES.SERVICES.PSYCHIATRY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {t("LANDING PAGE.SPECIALTIES.SERVICES.PSYCHIATRY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[30%] md:w-[250px] md:h-[250px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            <div className="flex justify-center items-center mt-2 ">
              <GiStomach />
            </div>
            <h4 className="mb-1">
              {t("LANDING PAGE.SPECIALTIES.SERVICES.GASTROENTEROLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {t(
                "LANDING PAGE.SPECIALTIES.SERVICES.GASTROENTEROLOGY.DESCRIPTION"
              )}
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[30%] md:w-[250px] md:h-[250px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            <div className="flex justify-center items-center mt-2 ">
              <MdOutlineBloodtype />
            </div>
            <h4 className="mb-1">
              {t("LANDING PAGE.SPECIALTIES.SERVICES.ENDOCRINOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {t("LANDING PAGE.SPECIALTIES.SERVICES.ENDOCRINOLOGY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[30%] md:w-[250px] md:h-[250px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <AiFillSecurityScan />
            </div>
            <h4 className="mb-1">
              {t("LANDING PAGE.SPECIALTIES.SERVICES.RADIOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {t("LANDING PAGE.SPECIALTIES.SERVICES.RADIOLOGY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[30%] md:w-[250px] md:h-[250px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <IoBody />
            </div>
            <h4 className="mb-1">
              {t("LANDING PAGE.SPECIALTIES.SERVICES.UROLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {t("LANDING PAGE.SPECIALTIES.SERVICES.UROLOGY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[30%] md:w-[250px] md:h-[250px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <BsFillClipboardHeartFill />
            </div>
            <h4 className="mb-1">
              {t("LANDING PAGE.SPECIALTIES.SERVICES.CARDIOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              {t("LANDING PAGE.SPECIALTIES.SERVICES.CARDIOLOGY.DESCRIPTION")}
            </p>
          </div>
          {/* Agrega más especialidades según sea necesario */}
        </div>
        {/* Mensaje Adicional */}
        <p
          className="text-2xl text-white font-semibold mt-12 mb-2 hidden sm-custom:block"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          {t("LANDING PAGE.SPECIALTIES.TAGLINE")}
        </p>
      </div>
    </div>
  );
};

export default Specialties;
