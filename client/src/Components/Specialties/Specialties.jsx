import { FaHandHoldingMedical } from "react-icons/fa"; // dermatology
import { GiMedicalDrip } from "react-icons/gi"; //rheumatology
import { GiBrain } from "react-icons/gi"; //Psychiatry
import { GiStomach } from "react-icons/gi"; //Gastroenterology
import { MdOutlineBloodtype } from "react-icons/md"; //Endocrinology
import { AiFillSecurityScan } from "react-icons/ai"; //Radiology
import { IoBody } from "react-icons/io5"; //Urology
import { BsFillClipboardHeartFill } from "react-icons/bs"; //Cardiology

const Specialties = () => {
  return (
    <div
      className="relative p-5 flex flex-wrap flex-col items-center justify-center text-center h-[870px] "
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',

        backgroundSize: "cover",
      }}>
      {/* Contenido de Servicios */}
      <div
        className="md:mt-50 lg:mt-12 text-black "
        style={{ backdropFilter: "blur(1px)" }}>
        <h3
          className="text-[50px] text-white font-semibold"
          style={{ fontFamily: "Rubik, sans-serif" }}>
          Our Services
        </h3>
        <p
          className="text-lg text-white mb-4"
          style={{ fontFamily: "Open Sans, sans-serif" }}>
          At HealthPlus we offer a wide variety of services to help you take
          care of yourself.
        </p>

        {/* Lista de Especialidades */}
        <div className="text-white flex gap-2 h-[600] flex-wrap justify-center group">
          <div
            className="bg-white/40 group-hover:blur-sm hover:!blur-none group-hover:scale[0.90] hover:!scale-100 cursor-pointer mb-2 w-[200px] h-[200px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <FaHandHoldingMedical />
            </div>
            <h4>Dermatology</h4>
            <p></p>
          </div>
          <div
            className="bg-white/40 group-hover:blur-md hover:!blur-none group-hover:scale[0.90] hover:!scale-100 cursor-pointer mb-2 w-[215px] h-[215px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <GiMedicalDrip />
            </div>
            <h4>Rheumatology</h4>
            <p></p>
          </div>
          <div
            className="bg-white/40 group-hover:blur-sm hover:!blur-none group-hover:scale[0.90] hover:!scale-100 cursor-pointer mb-2 w-[215px] h-[215px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <GiBrain />
            </div>
            <h4>Psychiatry</h4>
            <p></p>
          </div>
          <div
            className="bg-white/40 group-hover:blur-sm hover:!blur-none group-hover:scale[0.90] hover:!scale-100 cursor-pointer mb-2 w-[215px] h-[215px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <GiStomach />
            </div>
            <h4>Gastroenterology</h4>
            <p></p>
          </div>
          <div
            className="bg-white/40 group-hover:blur-sm hover:!blur-none group-hover:scale[0.90] hover:!scale-100 cursor-pointer mb-2 w-[215px] h-[215px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <MdOutlineBloodtype />
            </div>
            <h4>Endocrinology</h4>
            <p></p>
          </div>
          <div
            className="bg-white/40 group-hover:blur-sm hover:!blur-none group-hover:scale[0.90] hover:!scale-100 cursor-pointer mb-2 w-[215px] h-[215px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <AiFillSecurityScan />
            </div>
            <h4>Radiology</h4>
            <p></p>
          </div>
          <div
            className="bg-white/40 group-hover:blur-sm hover:!blur-none group-hover:scale[0.90] hover:!scale-100 cursor-pointer mb-2 w-[215px] h-[215px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <IoBody />
            </div>
            <h4>Urology</h4>
            <p></p>
          </div>
          <div
            className="bg-white/40 group-hover:blur-sm hover:!blur-none group-hover:scale[0.90] hover:!scale-100 cursor-pointer mb-2 w-[215px] h-[215px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <div className="flex justify-center items-center mt-2">
              <BsFillClipboardHeartFill />
            </div>
            <h4>Cardiology</h4>
            <p></p>
          </div>
          {/* Agrega más especialidades según sea necesario */}
        </div>
        {/* Mensaje Adicional */}
        <p
          className="text-2xl text-white font-semibold mt-10"
          style={{ fontFamily: "Open Sans, sans-serif" }}>
          Because if you care, we care!
        </p>
      </div>
    </div>
  );
};

export default Specialties;
