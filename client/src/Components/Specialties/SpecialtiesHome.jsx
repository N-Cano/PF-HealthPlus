import { FaHandHoldingMedical } from "react-icons/fa"; // dermatology
import { GiMedicalDrip } from "react-icons/gi"; //rheumatology
import { GiBrain } from "react-icons/gi"; //Psychiatry
import { GiStomach } from "react-icons/gi"; //Gastroenterology
import { MdOutlineBloodtype } from "react-icons/md"; //Endocrinology
import { AiFillSecurityScan } from "react-icons/ai"; //Radiology
import { IoBody } from "react-icons/io5"; //Urology
import { BsFillClipboardHeartFill } from "react-icons/bs"; //Cardiology
import video from "../../assets/home video 2.mp4";

const SpecialtiesHome = () => {
  return (
    <div>
      {/* Video */}
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute  w-full h-full object-cover"
        style={{ zIndex: 0, backdropFilter: "opacity(10%)" }}
      />

      {/* Contenido */}
      <div className=" relative w-full h-full z-1 flex flex-col justify-center items-center pt-0 ">
        <h3
          className="text-4xl font-semibold text-center text-blue-600 mt-4 bg-white-400/80 backdrop-blur-lg p-0 rounded-lg w-1/4"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Our Services
        </h3>
        <p
          className="text-lg text-center mt-1 mb-8 text-white bg-blue-400/30 backdrop-blur-lg p-0 rounded-lg w-1/2"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          At HealthPlus, we offer a wide variety of services to help you take
          care of yourself.
        </p>

        {/* Lista de Especialidades */}
        <div className="text-blue-900 font-semibold flex gap-12 flex-wrap items-center justify-center group h-[500px]">
          <div
            className="bg-white/80 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl"
            style={{
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            <div className="flex justify-center items-center mt-2">
              <FaHandHoldingMedical />
            </div>
            <h4 className="mb-1 text-center">Dermatology</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              <strong>Skin is the largest organ </strong>of the human body and
              is one of the most precious things that a human has in terms of
              their health and well-being. Skin conditions can become a major
              issue over time if left untreated, and
              <strong>dermatologists</strong> help patients overcome some of the
              complications that might arise.
            </p>
          </div>
          <div
            className="bg-white/80 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <div className="flex justify-center items-center mt-2">
              <GiMedicalDrip />
            </div>
            <h4 className="mb-1 text-center">Rheumatology</h4>
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
            className="bg-white/80 cursor-pointer mb-1 w-[250px] h-[230px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <div className="flex justify-center items-center mt-2">
              <GiBrain />
            </div>
            <h4 className="mb-0.5 text-center">Psychiatry</h4>
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
            className="bg-white/80 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <div className="flex justify-center items-center mt-2">
              <GiStomach />
            </div>
            <h4 className="mb-1 text-center">Gastroenterology</h4>
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
            className="bg-white/80 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <div className="flex justify-center items-center mt-2">
              <MdOutlineBloodtype />
            </div>
            <h4 className="mb-1 text-center">Endocrinology</h4>
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
            className="bg-white/80 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <div className="flex justify-center items-center mt-2">
              <AiFillSecurityScan />
            </div>
            <h4 className="mb-1 text-center">Radiology</h4>
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
            className="bg-white/80 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <div className="flex justify-center items-center mt-2">
              <IoBody />
            </div>
            <h4 className="mb-1 text-center">Urology</h4>
            <p
              className="text-[13px] text-black text-left ml-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              A <strong>urologist</strong> is a medical doctor specializing in
              conditions that affect the urinary tract in men, women and
              children, and diseases that affect
              <strong>the reproductive system.</strong>. These conditions range
              from peeing too much or too little to being unable to father a
              child.
            </p>
          </div>
          <div
            className="bg-white/80 cursor-pointer mb-2 w-[250px] h-[230px] rounded-2xl"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            <div className="flex justify-center items-center mt-2">
              <BsFillClipboardHeartFill />
            </div>
            <h4 className="mb-1 text-center">Cardiology</h4>
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
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesHome;
