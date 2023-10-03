
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import doctors from "../../assets/doctors.png"
import logoGoogle from "../../assets/logoGoogle.png"
import { UserAuth } from '../../context/AuthContext'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'
import { useForm, Controller } from "react-hook-form";


const Login = () => {
  //-------------------------------Google Auth-----------------------------------------

    const { handleSubmit, control, formState: { errors } } = useForm();

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginWithEmailPassword = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password); // Usa getAuth(auth)
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    };




  const loginWithEmailPassword = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Usa getAuth(auth)
      navigate("/home");
    } catch (error) {
      alert(
        "Error al iniciar sesión con correo y contraseña: verificar datos",
        error.message
      );
    }
  };


    //----------------------------------------------------------------
    //MOSTRAR CONTRASEÑA
    const [showPassword, setShowPassword] = useState(false);
    const [iconClass, setIconClass] = useState('bx')

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  //----------------------------------------------------------------
  //MOSTRAR CONTRASEÑA
  const [showPassword, setShowPassword] = useState(false);
  const [iconClass, setIconClass] = useState("bx");

    const togglePassword = () => {
        setShowPassword(!showPassword);
        setIconClass(showPassword ? 'bx-show-alt' : 'bx-hide');
    };


    return (
        <div className='h-screen flex justify-center items-start flex-col relative bg-blue-200'>
            <div className='bg-blue-400 rounded-2xl max-h-[34rem] h-full text-center p-8 ml-20 max-w-md w-full z-10' >
                <h2
                    className='text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2'
                >Sign In</h2>

                <form onSubmit={handleSubmit(loginWithEmailPassword)}>
                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='font-bold text-xl'>Email</label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'This field is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Please enter a valid email address",
                                }
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
                        {errors.email && <p className='text-red-800'>{errors.email.message}</p>}
                    </div>

                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='font-bold text-xl'>Password</label>
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
                                    message: "The password must not be more than 10 characters",
                                },
                            }}
                            render={({ field }) => (
                                <div className="relative flex items-center bg-white rounded-2xl pr-4">
                                    <input
                                        {...field}
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password..."
                                        className="w-full p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none"
                                    />
                                    <i className={`bx ${showPassword ? 'bx-hide' : 'bx-show-alt'}`} onClick={togglePassword}></i>
                                    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
                                </div>
                            )}
                        />
                        {errors.password && <p className='text-red-800'>{errors.password.message}</p>}
                    </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex text-xs w-full justify-between mb-8">
            <Link
              to="/forgotPassword"
              className="hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out"
            >
              Forgot Password
            </Link>

                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex text-xs w-full justify-between'>
                            <Link
                                to='/forgotPassword'
                                className='hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out'
                            >Forgot Password</Link>
                            <Link
                                to='/signUp'
                                className='hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out'
                            >Sign Up</Link>
                        </div>
                        <button
                            type="submit"
                            className='bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out mb-4'
                        >Sign In</button>
                    </div>
                </form>
                <button onClick={loginWithGoogle} className='bg-white p-2 rounded-2xl mb-4 w-56 flex items-center hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out m-auto'>
                    <img className='w-5 m-2' src={logoGoogle} alt="" /> Sign in with Google
                </button>

            </div>
            <img src={doctors} className="w-[50rem] absolute right-0 bottom-0" />

        </div>
      </div>
      <img src={doctors} className="w-[50rem] absolute right-0 bottom-0" />
    </div>
  );
};

export default Login;
