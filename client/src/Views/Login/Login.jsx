import { Link } from "react-router-dom"
import doctors from "../../assets/doctors.png"
import logoGoogle from "../../assets/logoGoogle.png"
import {UserAuth} from '../../context/AuthContext'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react";
const Login = () => {

    const navigate = useNavigate();
    const {user, signInWithGoogle} = UserAuth();
    const loginWithGoogle = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if(user !== null) {
            navigate('/home')
        }
    }, [user]);
//----------------------------------------------------------------------------------

const [form,setForm] = useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
      });
       const changeHandler = (event)=>{
          const property = event.target.name;
          const value = event.target.value;
          setForm({...form, [property]:value})
        //   validate({...form, [property]:value})
      }
      const submitHandler =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:3001/users/signup",form)
        alert("Usuario Creado")
        navigate("/home")
        
      }


    return (
        <div className='h-screen flex justify-center items-start flex-col relative'>
            <div className='bg-blue-400 rounded-2xl max-h-[32rem] h-full text-center p-8 ml-20 max-w-md w-full z-10' >
                <h2
                    className='text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2'
                >Sign In</h2>
         <form onSubmit={submitHandler}>
                <div className='flex flex-col gap-2 mb-6'>
                    <label className='font-bold text-xl'>Email</label>
                    <input onChange={changeHandler}
                        className='p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none'
                        type="text"
                        placeholder="Email..."
                        name="email"
                        value={form.email}
                    ></input>
                </div>

                <div className='flex flex-col gap-2 mb-6'>
                    <label className='font-bold text-xl'>Password</label>
                    <input
                    onChange={changeHandler}
                        className='p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none'
                        type="password"
                        placeholder="Password..."
                        name="password"
                        value={form.password}
                    ></input>
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
                        type="submit"
                        value="password"
                        className='bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out'
                    >START</button>
                </div>
                </form>
            </div>
            <img src={doctors} className="w-[50rem] absolute right-0 bottom-0" />
        </div>
    )
}
export default Login