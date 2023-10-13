import { Link } from "react-router-dom";
import logo3 from "../../assets/logo2sinfond0.png";
import ScrollHome from "../Scroll/ScrollHome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { UserAuth } from "../../context/AuthContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { authEmail } from "../../functions/post";

const NavHome = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { signOutWithGoogle } = UserAuth();
  const [user, setUser] = useState(null); // Estado local para el usuario autenticado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logOutWithGoogle = async () => {
    try {
      await signOutWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  // Observador de cambios de autenticación de Firebase
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Usuario autenticado, establecer el estado local
        setUser(authUser);
      } else {
        // Usuario no autenticado, redirigir a la página de inicio de sesión u otra acción
        navigate("/");
      }
    });

    // Limpia el observador cuando el componente se desmonta
    return () => unsubscribe();
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const checkAuth = () => {
    const user = auth.currentUser;
    authEmail(user)
  };

  
  return (
    <nav className="bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src={logo3} alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-4 ml-auto">
                  <ScrollHome />
                </div>
                <div className="flex items-center">
                  <Link to="/create">
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium"
                      style={{ fontFamily: "Rubik, sans-serif" }}
                    >
                      {t("HOME PAGE.NAVBAR.SCHEDULE")}
                    </a>
                  </Link>
                  <div className="ml-[170px]">
                    <LanguageSwitcher />
                  </div>
                  <div className="flex items-center">
                    <h3
                      className="ml-[100px] font-semibold"
                      style={{ fontFamily: "Rubik, sans-serif" }}
                    >
                      {t("HOME PAGE.NAVBAR.WELCOME")},<br></br>
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
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                <Link to="/profile">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={checkAuth}
                  >
                    {t("HOME PAGE.NAVBAR.LOGIN.PROFILE")}

                  </button>

                </Link>
                <Link to="/myDates">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100"
                  >
                    {t("HOME PAGE.NAVBAR.LOGIN.DATES")}
                  </a>
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100"
                  onClick={logOutWithGoogle}
                >
                  {t("HOME PAGE.NAVBAR.LOGIN.LOG OUT")}
                </a>
                {user?.email === "admin@admin.com" && (
                  <Link to="/dashboard">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover.bg-gray-100"
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
