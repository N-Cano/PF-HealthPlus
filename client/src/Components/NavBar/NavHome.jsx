import { Link } from "react-router-dom";
import ScrollHome from "../Scroll/ScrollHome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { UserAuth } from "../../context/AuthContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { authEmail } from "../../functions/post";

import axios from "axios";

const NavHome = () => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();

  const navigate = useNavigate();
  const { signOutWithGoogle } = UserAuth();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logOutWithGoogle = async () => {
    try {
      await signOutWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  //----------------------------------------------------
  const [form, setForm] = useState({
    uid: "",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function(user) {
      if (user) {
        const uid = user.uid;
        setForm({ uid });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const [enable, setEnable] = useState(false); // Estado local para controlar "enable"

  useEffect(() => {
    if (form.uid) {
      axios
        .get(`http://localhost:3001/users/${form.uid}`)
        .then((response) => {
          const data = response.data;
          if (data.enable) {
            setEnable(true); // Establece "enable" en true si la respuesta del servidor es verdadera
          } else {
            setEnable(false); // Establece "enable" en false si la respuesta del servidor es falsa
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [form.uid]);

  return (
    <nav
      className="bg-blue-900 text-white"
      style={{ background: darkMode ? "black" : "" }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src='https://res.cloudinary.com/drpge2a0c/image/upload/v1697553463/assets/logo2sinfond0_od1ox8.png' alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-4 ml-auto">
                  <ScrollHome />
                </div>

                <Link to={"/plan"}>
                  {enable !== true && (
                    <button
                      className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-5  text-sm font-medium"
                      onClick={() => {
                        scrollTo("subscribe");
                      }}
                    >
                      {t("HOME PAGE.NAVBAR.SCROLL HOME.SUBSCRIBE")}
                    </button>
                  )}
                </Link>
                <div className="flex items-center">
                  <Link to="/create">
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium"
                    >
                      {t("HOME PAGE.NAVBAR.SCHEDULE")}
                    </a>
                  </Link>

                  <div className="ml-auto">
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {darkMode ? (
                        <FaRegSun className="inline-block text-yellow" />
                      ) : (
                        <FaRegMoon className="inline-block text-white" />
                      )}
                    </button>
                  </div>

                  <div className="ml-auto">
                    <LanguageSwitcher />
                  </div>

                  <div className="flex items-center text-center">
                    <h3 className="ml-auto font-semibold">
                      {t("HOME PAGE.NAVBAR.WELCOME")},<br />
                      {user ? user.displayName || user.email : ""}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={toggleMenu}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
              </button>
            </div>

            {isMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
                style={{
                  background: darkMode ? "#00519C" : "",
                  color: darkMode ? "white" : "black",
                }}
              >
                <Link to="/profile">
                  <button
                    className="block px-4 py-2 text-sm  hover:bg-gray-100"
                  >
                    {t("HOME PAGE.NAVBAR.LOGIN.PROFILE")}
                  </button>
                </Link>
                <Link to="/myDates">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm  hover:bg-gray-100"
                  >
                    {t("HOME PAGE.NAVBAR.LOGIN.DATES")}
                  </a>
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm  hover:bg-gray-100"
                  onClick={logOutWithGoogle}
                  style={{
                    background: darkMode ? "black" : "",
                  }}
                >
                  {t("HOME PAGE.NAVBAR.LOGIN.LOG OUT")}
                </a>
                {user?.email === "admin@admin.com" && (
                  <Link to="/dashboard">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm  hover.bg-gray-100"
                    >
                      Dashboard
                    </a>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHome;
