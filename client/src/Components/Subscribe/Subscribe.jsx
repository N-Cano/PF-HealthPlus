import { FaUserDoctor } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div>
      <h2
        className="text-[30px] text-center pt-2 mt-3 mb-0 font-semibold"
        style={{ fontFamily: "Rubik, sans-serif" }}
      >
        Because if you care, we care!
      </h2>
      <div className="grid grid-cols-3 h-[400px]">
        <div className="flex flex-col justify-center items-center p-4">
          <FaUserDoctor className="text-4xl" />
          <h3
            className="text-xl mt-4 text-left"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            At HealthPlus, we understand that your health is your most valuable
            asset. That's why we've designed our Comprehensive Monthly
            Healthcare Plan to provide you and your family with unparalleled
            access to top-notch medical care. This all-inclusive plan is
            tailored to meet your unique healthcare needs, ensuring your
            well-being every step of the way.
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          {/* Replace FaHospital with the img tag */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/6993/6993594.png"
            alt="Hospital Image"
            className="w-16 h-16" // Set width and height as needed
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <div className="text-center">
            <p
              className="text-base mb-4"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              Invest in your health and the health of your family.
            </p>
            <strong className="text-lg block mb-2">ONLY $200</strong>
          </div>

          <Link to="/plan">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
