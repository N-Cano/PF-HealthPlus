import { FaHandHoldingMedical } from "react-icons/fa"; // dermatology
import { GiMedicalDrip } from "react-icons/gi"; //rheumatology
import { GiBrain } from "react-icons/gi"; //Psychiatry
import { GiStomach } from "react-icons/gi"; //Gastroenterology
import { MdOutlineBloodtype } from "react-icons/md"; //Endocrinology
import { AiFillSecurityScan } from "react-icons/ai"; //Radiology
import { IoBody } from "react-icons/io5"; //Urology
import { BsFillClipboardHeartFill } from "react-icons/bs"; //Cardiology
import { useTranslation } from "react-i18next";

const SpecialtiesHome = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Video */}
      <video
        src='https://res.cloudinary.com/drpge2a0c/video/upload/v1697553490/assets/home_video_2_ozzxu8.mp4'
        autoPlay
        loop
        muted
        className="absolute mt-0  w-full h-[700px] object-cover"
        style={{ zIndex: 0, backdropFilter: "opacity(50%)" }}
      />

      {/* Contenido */}
      <div className="relative w-full h-full z-1 flex flex-col justify-center items-center pt-0 mt-8">
        <h3
          className="text-4xl font-semibold text-center text-blue-600 mt-4 bg-white-400/90  p-0 rounded-lg w-1/4"
          style={{ fontFamily: "Rubik, sans-serif" }}>
          {t("HOME PAGE.SPECIALTIES HOME.OUR SERVICES")}
        </h3>
        <p
          className="text-lg text-center mt-1 mb-8 text-blue-400 font-semibold  p-0 rounded-lg w-1/2"
          style={{ fontFamily: "Open Sans, sans-serif" }}>
          {t("HOME PAGE.SPECIALTIES HOME.DESCRIPTION 1")}
        </p>

        {/* Lista de Especialidades */}
        <div className="text-blue-900 font-semibold flex gap-2 flex-wrap items-center justify-center group h-[500px]">
          <div
            className="bg-white/95 cursor-pointer mb-2 w-[255px] h-[255px] rounded-2xl"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}>
            <div className="flex justify-center items-center mt-2">
              <FaHandHoldingMedical />
            </div>
            <h4 className="mb-1 text-center">
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.DERMATOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{
                fontFamily: "Open Sans, sans-serif",
              }}>
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.DERMATOLOGY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/95 cursor-pointer mb-2 w-[255px] h-[255px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <GiMedicalDrip />
            </div>
            <h4 className="mb-1 text-center">
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.RHEUMATOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}>
              {t(
                "HOME PAGE.SPECIALTIES HOME.SERVICES.RHEUMATOLOGY.DESCRIPTION"
              )}
            </p>
          </div>
          <div
            className="bg-white/95 cursor-pointer mb-2 w-[255px] h-[255px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <GiBrain />
            </div>
            <h4 className="mb-0.5 text-center">
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.PSYCHIATRY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}>
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.PSYCHIATRY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/95 cursor-pointer mb-2 w-[255px] h-[255px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <GiStomach />
            </div>
            <h4 className="mb-1 text-center">
              {" "}
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.GASTROENTEROLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}>
              {t(
                "HOME PAGE.SPECIALTIES HOME.SERVICES.GASTROENTEROLOGY.DESCRIPTION"
              )}
            </p>
          </div>
          <div
            className="bg-white/95 cursor-pointer mb-2 w-[255px] h-[255px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <MdOutlineBloodtype />
            </div>
            <h4 className="mb-1 text-center">
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.ENDOCRINOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}>
              {t(
                "HOME PAGE.SPECIALTIES HOME.SERVICES.ENDOCRINOLOGY.DESCRIPTION"
              )}
            </p>
          </div>
          <div
            className="bg-white/95 cursor-pointer mb-2 w-[255px] h-[255px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <AiFillSecurityScan />
            </div>
            <h4 className="mb-1 text-center">
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.RADIOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}>
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.RADIOLOGY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/95 cursor-pointer mb-2 w-[255px] h-[255px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <IoBody />
            </div>
            <h4 className="mb-1 text-center">
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.UROLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}>
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.UROLOGY.DESCRIPTION")}
            </p>
          </div>
          <div
            className="bg-white/95 cursor-pointer mb-2 w-[255px] h-[255px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <BsFillClipboardHeartFill />
            </div>
            <h4 className="mb-1 text-center">
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.CARDIOLOGY.TITLE")}
            </h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}>
              {t("HOME PAGE.SPECIALTIES HOME.SERVICES.CARDIOLOGY.DESCRIPTION")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesHome;
