import { FaHandHoldingMedical } from "react-icons/fa"; // dermatology
import { GiMedicalDrip } from "react-icons/gi"; //rheumatology
import { GiBrain } from "react-icons/gi"; //Psychiatry
import { GiStomach } from "react-icons/gi"; //Gastroenterology
import { MdOutlineBloodtype } from "react-icons/md"; //Endocrinology
import { AiFillSecurityScan } from "react-icons/ai"; //Radiology
import { IoBody } from "react-icons/io5"; //Urology
import { BsFillClipboardHeartFill } from "react-icons/bs"; //Cardiology

const Specialties = () => {
  const zoomInStyle = {
    transform: "scale(1.1)",
    transition: "transform 0.3s ease-in-out",
  };
  return (
    <div
      className="flex flex-wrap justify-center items-center text-center h-[1000px]"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',

        backgroundSize: "cover",
      }}
    >
      {/* Contenido de Servicios */}
      <div style={{ backdropFilter: "blur(1px)" }} className="mb-[95px]">
        <h3
          className="text-[58px] text-white font-semibold"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Our Services
        </h3>
        <p
          className="text-lg text-white mb-4"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          At HealthPlus we offer a wide variety of services to help you take
          care of yourself.
        </p>

        {/* Lista de Especialidades */}
        <div className="text-blue-900 font-semibold flex gap-12 flex-wrap justify-center items-center h-[550px]">
          {/* Tarjeta Dermatology */}
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
              ...zoomInStyle,
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <FaHandHoldingMedical />
            </div>
            <h4 className="mb-1">Dermatology</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <strong>Skin is the largest organ </strong>of the human body and
              is one of the most precious things that a human has in terms of
              their health and well-being. Skin conditions can become a major
              issue over time if left untreated, and{" "}
              <strong>dermatologists</strong> help patients overcome some of the
              complications that might arise.
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
              ...zoomInStyle,
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <GiMedicalDrip />
            </div>
            <h4 className="mb-1">Rheumatology</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              A <strong>rheumatologist </strong>is an internal medicine
              physician with subspecialized training in rheumatology. This
              medical specialty deals with musculoskeletal conditions, as well
              as autoimmune and inflammatory conditions in people of all ages.
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
              ...zoomInStyle,
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <GiBrain />
            </div>
            <h4 className="mb-0.5">Psychiatry</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              People seek <strong>psychiatric</strong> help for many reasons.
              The problems can be sudden, such as a panic attack, frightening
              hallucinations, or thoughts of suicide. Psychotherapy, sometimes
              called talk therapy, is a treatment that involves a talking
              relationship between a therapist and patient.
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
              ...zoomInStyle,
            }}
          >
            <div className="flex justify-center items-center mt-2 ">
              <GiStomach />
            </div>
            <h4 className="mb-1">Gastroenterology</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <strong> gastroenterology</strong> medical specialty concerned
              with the digestive system and its diseases. Gastroenterologists
              diagnose and treat the diseases and disorders of the esophagus,
              stomach, intestines, liver, biliary tract, and pancreas.
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
              ...zoomInStyle,
            }}
          >
            <div className="flex justify-center items-center mt-2 ">
              <MdOutlineBloodtype />
            </div>
            <h4 className="mb-1">Endocrinology</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <strong>Endocrinologists</strong> are qualified to diagnose and
              treat conditions like diabetes, thyroid diseases, infertility,
              growth issues, metabolic disorders, osteoporosis, some cancers,
              and disorders in the hormone-producing adrenal glands and
              pituitary glands.
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
              ...zoomInStyle,
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <AiFillSecurityScan />
            </div>
            <h4 className="mb-1">Radiology</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <strong>Radiology</strong>, also known as diagnostic imaging, is a
              series of tests that take pictures or images of parts of the body.
              The field encompasses two areas —
              <strong>diagnostic radiology and interventional radiology</strong>{" "}
              — that both use radiant energy to diagnose and treat diseases.
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
              ...zoomInStyle,
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <IoBody />
            </div>
            <h4 className="mb-1">Urology</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              A <strong>urologist</strong> is a medical doctor specializing in
              conditions that affect the urinary tract in men, women and
              children, and diseases that affect{" "}
              <strong>the reproductive system.</strong>. These conditions range
              from peeing too much or too little to being unable to father a
              child.
            </p>
          </div>
          <div
            className="bg-white/50 group-hover:scale-110 hover:scale-100 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl transition-transform duration-300 ease-in-out"
            style={{
              fontFamily: "Open Sans, sans-serif",
              ...zoomInStyle,
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <BsFillClipboardHeartFill />
            </div>
            <h4 className="mb-1">Cardiology</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <strong>Cardiology</strong>, is a medical specialty dealing with
              the diagnosis and treatment of diseases and abnormalities
              involving the heart and blood vessels.Cardiologists provide the
              continuing care of patients with cardiovascular disease,
              performing basic studies of heart function.
            </p>
          </div>
          {/* Agrega más especialidades según sea necesario */}
        </div>
        {/* Mensaje Adicional */}
        <p
          className="text-2xl text-white font-semibold mt-12 mb-2 hidden sm-custom:block"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          Because if you care, we care!
        </p>
      </div>
    </div>
  );
};

export default Specialties;
