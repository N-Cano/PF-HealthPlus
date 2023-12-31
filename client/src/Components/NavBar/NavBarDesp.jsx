import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useTheme } from "../../contextAPI/ThemeContext";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

function SideNavbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button
          onClick={() => setOpen(!open)}
          className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black group"
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}
        >
          <GiHamburgerMenu className="block  h-6 w-6" aria-hidden="true" />
        </Disclosure.Button>
        <div
          className={`transition-transform transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } p-6 w-1/2 h-screen bg-blue-100 hover:bg-indigo-100 z-20 fixed top-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200`}
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}
        >
          <div className="flex flex-col justify-start item-center">
            <h1
              className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full"
              style={{
                color: darkMode ? "#6EA0E7" : "",
              }}
            >
              Health-Plus
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <Link to="/dashboard">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <CgProfile className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                    style={{
                      color: darkMode ? "#6D7580" : "",
                    }}
                  >
                    Docs
                  </h3>
                </div>
              </Link>
              <Link to="/dashboardusers">
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <CgProfile className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                    style={{
                      color: darkMode ? "#6D7580" : "",
                    }}
                  >
                    Users
                  </h3>
                </div>
              </Link>

              <Link to={"/graphics"}>
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                    style={{
                      color: darkMode ? "#6D7580" : "",
                    }}
                  >
                    Analytics
                  </h3>
                </div>
              </Link>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <button onClick={toggleDarkMode}>
                  {darkMode ? (
                    <FaRegSun className="text-2xl text-gray-600 group-hover:text-white" />
                  ) : (
                    <FaRegMoon className="text-2xl text-gray-600 group-hover:text-white" />
                  )}
                </button>
                <h3
                  className="text-base text-gray-800 group-hover:text-white font-semibold"
                  onClick={toggleDarkMode}
                  style={{
                    color: darkMode ? "#6D7580" : "",
                  }}
                >
                  Darkmode
                </h3>
              </div>
            </div>

            <Link to="/home">
              <div className=" my-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
                  <h3
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                    style={{
                      color: darkMode ? "#6D7580" : "",
                    }}
                  >
                    Home
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
