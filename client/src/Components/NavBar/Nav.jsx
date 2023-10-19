import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { UserAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTheme } from "../../contextAPI/ThemeContext";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import axios from "axios";

const Nav = () => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();

  const navigate = useNavigate();
  const { signOutWithGoogle } = UserAuth();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [updatedImageUrl, setUpdatedImageUrl] = useState("");

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

  useEffect(() => {
    if (user && user.uid) {
      // Verifica que el usuario esté logueado y tenga un UID
      axios
        .get(`http://localhost:3001/users/${user.uid}`)
        .then((response) => {
          const data = response.data;
          console.log(data);

          if (data.image) {
            setUpdatedImageUrl(data.image);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-blue-900 text-white"
      style={{ background: darkMode ? "black" : "" }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-auto"
                src="https://res.cloudinary.com/drpge2a0c/image/upload/v1697553463/assets/logo2sinfond0_od1ox8.png"
                alt="Logo"
              />
            </div>

            <div className="hidden sm:ml-6 sm:flex flex-grow items-center space-x-4">
              <Link to="/home">
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium"
                  style={{ fontFamily: "Rubik, sans-serif" }}
                >
                  {t("NAV.HOME BUTTON")}
                </a>
              </Link>

              <div className="ml-auto flex items-center space-x-4">
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

                <LanguageSwitcher />

                <div className="flex">
                  <h3
                    className="ml-4 font-semibold"
                    style={{ fontFamily: "Rubik, sans-serif" }}
                  >
                    {t("NAV.WELCOME")}, <br />
                    {user ? user.displayName || user.email : ""}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="relative flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={toggleMenu}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={updatedImageUrl}
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
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-black"
                  >
                    {t("NAV.LOGIN.PROFILE")}
                  </a>
                </Link>
                <Link to="/myDates">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-black"
                  >
                    {t("NAV.LOGIN.DATES")}
                  </a>
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-black"
                  onClick={logOutWithGoogle}
                >
                  {t("NAV.LOGIN.LOG OUT")}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
