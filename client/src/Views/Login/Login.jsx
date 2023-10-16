import { Link } from "react-router-dom";
import logoGoogle from "../../assets/logoGoogle.png";
import { UserAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../Components/LanguageSwitcher/LanguageSwitcher";
import { useTheme } from "../../contextAPI/ThemeContext";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { Footer } from "../../Components";

const Login = () => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();

  const {
    handleSubmit,
    control,
    formState: { errors },
    // setValue,
  } = useForm();

  //-------------------------------Google Auth-----------------------------------------
  const navigate = useNavigate();
  const { user, signInWithGoogle } = UserAuth();

  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  //----------------------Email and Password Auth-------------------------------------
  const loginWithEmailPassword = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  //---------------------Mostrar Contraseña-------------------------------------------
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <>
      <div
        className="max-h-full max-w-full justify-center items-center flex-col relative bg-gradient-to-br from-blue-300 to-gray-100 shadow-lg"
        style={{ background: darkMode ? "black" : "" }}>
        <div className="bg-blue-900 flex justify-center items-center gap-1 p-4">
          <Link to="/">
            <a
              href="#"
              className="text-white hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium mr-auto"
              style={{ fontFamily: "Rubik, sans-serif" }}>
              {t("LOGIN.BUTTONBACK")}
            </a>
          </Link>
          <div className="ml-auto flex justify-center items-center">
            <LanguageSwitcher />
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              {darkMode ? (
                <FaRegSun className="inline-block text-yellow" />
              ) : (
                <FaRegMoon className="inline-block text-white" />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div
            className="bg-blue-400 rounded-2xl text-center p-8 max-w-[552px] w-full z-10"
            style={{
              background: darkMode ? "#1E3144" : "",
            }}>
            <h2
              className="text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2"
              style={{
                fontFamily: "Rubik, sans-serif",
                background: darkMode ? "#325372" : "",
              }}>
              {t("LOGIN.SIGN IN")}
            </h2>
            <form onSubmit={handleSubmit(loginWithEmailPassword)}>
              <div className="flex flex-col gap-2 mb-6">
                <label className="font-bold text-xl">
                  {t("LOGIN.FORM.EMAIL")}
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "This field is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder={t("LOGIN.FORM.PLACEHOLDERS.EMAIL")}
                      className="p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-800">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="font-bold text-xl">
                  {t("LOGIN.FORM.PASSWORD")}
                </label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "The password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 10,
                      message:
                        "The password must not be more than 10 characters",
                    },
                  }}
                  render={({ field }) => (
                    <div className="relative flex items-center bg-white rounded-2xl pr-4">
                      <input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder={t("LOGIN.FORM.PLACEHOLDERS.PASSWORD")}
                        className="w-full p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none"
                      />
                      <i
                        className={`bx ${
                          showPassword ? "bx-show-alt" : "bx-hide"
                        }`}
                        onClick={togglePassword}></i>
                      <link
                        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                        rel="stylesheet"
                      />
                    </div>
                  )}
                />
                {errors.password && (
                  <p className="text-red-800">{errors.password.message}</p>
                )}
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex text-xs w-full justify-between mb-4">
                  <Link
                    to="/forgotPassword"
                    className="hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out">
                    {t("LOGIN.FORGOT PASSWORD")}
                  </Link>

                  <Link
                    to="/signUp"
                    className="hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out"
                    style={{ fontFamily: "Rubik, sans-serif" }}>
                    {t("LOGIN.SIGN UP")}
                  </Link>
                </div>
                <button
                  type="submit"
                  className="bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out mb-4"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                    background: darkMode ? "#325372" : "",
                  }}>
                  {t("LOGIN.SIGN IN")}
                </button>
              </div>
            </form>
            <button
              onClick={loginWithGoogle}
              className="bg-white p-2 rounded-2xl mb-4 w-56 flex items-center hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out m-auto"
              style={{
                fontFamily: "Rubik, sans-serif",
                background: darkMode ? "#00519C" : "",
              }}>
              <img className="w-5 m-2" src={logoGoogle} alt="" />
              {t("LOGIN.SIGN IN WITH GOOGLE")}
            </button>
          </div>

          {/* <img
            src={doctors}
            className="w-[50rem] absolute bottom-0 right-10 hidden lg:block"
            alt="Doctors"
          /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
