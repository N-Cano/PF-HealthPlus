import { Link } from "react-router-dom";
import doctors from "../../assets/doctors.png";
import logoGoogle from "../../assets/logoGoogle.png";
import { UserAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
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
    <div>
      <div className="h-screen justify-center items-center flex-col relative bg-blue-200">
        <Link to="/">
          <button
            className="bg-slate-950 ml-8 mt-12 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out mb-1"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Back
          </button>
        </Link>
        <div className="flex justify-center items-center h-4/5">
          <div className="bg-blue-400 rounded-2xl mt-10 text-center p-8 max-w-[552px] w-full z-10">
            <h2
              className="text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              Sign In
            </h2>

            <form onSubmit={handleSubmit(loginWithEmailPassword)}>
              <div className="flex flex-col gap-2 mb-6">
                <label className="font-bold text-xl">Email</label>
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
                      placeholder="Email..."
                      className="p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-800">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="font-bold text-xl">Password</label>
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
                        placeholder="Password..."
                        className="w-full p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none"
                      />
                      <i
                        className={`bx ${
                          showPassword ? "bx-show-alt" : "bx-hide"
                        }`}
                        onClick={togglePassword}
                      ></i>
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
                    className="hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out"
                  >
                    Forgot Password
                  </Link>

                  <Link
                    to="/signUp"
                    className="hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out"
                    style={{ fontFamily: "Rubik, sans-serif" }}
                  >
                    Sign Up
                  </Link>
                </div>
                <button
                  type="submit"
                  className="bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out mb-4"
                  style={{ fontFamily: "Rubik, sans-serif" }}
                >
                  Sign In
                </button>
              </div>
            </form>
            <button
              onClick={loginWithGoogle}
              className="bg-white p-2 rounded-2xl mb-4 w-56 flex items-center hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out m-auto"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              <img className="w-5 m-2" src={logoGoogle} alt="" /> Sign in with
              Google
            </button>
          </div>

          <img
            src={doctors}
            className="w-[50rem] absolute bottom-0 right-10 hidden lg:block"
            alt="Doctors"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
