/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import doctors from "../../assets/doctors.png"
import logoGoogle from "../../assets/logoGoogle.png"
import { UserAuth } from '../../context/AuthContext'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'

const Login = () => {

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
            alert("Error al iniciar sesión con correo y contraseña: verificar datos", error.message);
        }
    };

           

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user]);

//----------------------------------------------------------------
//MOSTRAR CONTRASEÑA
    const [showPassword, setShowPassword] = useState(false);
    const [iconClass, setIconClass] = useState('bx')


  const togglePassword = () => {
    setShowPassword(!showPassword);
    setIconClass(showPassword ? 'bx-show-alt' : 'bx-hide');
  };
      

    return (
        <div className='h-screen flex justify-center items-start flex-col relative'>
            <div className='bg-blue-400 rounded-2xl max-h-[32rem] h-full text-center p-8 ml-20 max-w-md w-full z-10' >
                <h2
                    className='text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2'
                >Sign In</h2>
               
                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='font-bold text-xl'>Email</label>
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                            className='p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none'         
                            placeholder="Email..."
                        ></input>
                    </div>

                    <div className='flex flex-col gap-2 mb-6'>
                        <label className='font-bold text-xl'>Password</label>
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                            className='p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none'
                            type={showPassword ? 'text' : 'password'}
                            id="pass"
                            placeholder="Password..."
                            name="password"
                            

                        ></input>
                        <i className={`bx ${showPassword ? 'bx-hide' : 'bx-show-alt'}`}
                           onClick={togglePassword}></i>
                        
                     
                        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
                    </div>


                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex text-xs w-full justify-between mb-8'>
                            <Link
                                to='/forgotPassword'
                                className='hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out'
                            >Forgot Password</Link>
                            <Link
                                to='/signUp'
                                className='hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out'
                            >Sign Up</Link>
                        </div>
                        <button onClick={loginWithGoogle} className='bg-white p-2 rounded-2xl mb-4 w-56 flex items-center hover:text-gray-600 hover:scale-110 transition duration-300 ease-in-out'>
                            <img className='w-5 m-2' src={logoGoogle} alt="" /> Sign in with Google
                        </button>
                        <button
                            onClick={loginWithEmailPassword}
                            type="submit"
                            className='bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out'
                        >Sign in with Email and Password</button>
                    </div>
                
            </div>
            <img src={doctors} className="w-[50rem] absolute right-0 bottom-0" />
        </div>
    )
}
export default Login