/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom"
import { sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const forgotPassword = () => {
    const loginPage = useNavigate();
    const handleSubmit = async(e)=>{

        e.preventDefault()

        try {
          const emailValue = e.target.email.value;
          await sendPasswordResetEmail(auth, emailValue);
          alert("Sending email to restart your password!!")
          loginPage("/login");
        } catch (error) {
        alert(error.message);
        }          
    };
    
    return (
        <form onSubmit={handleSubmit} className='flex m-auto justify-center items-center flex-col h-screen'>
            <Link
                to='/login'
                className='absolute top-0 left-0 m-8 hover:scale-110 transition duration-300 ease-in-out bg-slate-950 text-neutral-50 w-20 p-2 rounded-2xl text-center'
            >Back</Link>

            <div className='flex justify-center flex-col gap-2 mb-6 max-w-md w-full h-5/6'>
                <div className='flex flex-col items-center gap-8 bg-blue-400 p-8 rounded-2xl'>
                    <label className='font-bold text-2xl'>Email</label>
                    <input
                        className='p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none w-72'
                        type="text"
                        name="email"
                        placeholder="Email..."
                    ></input>
                    <button
                        type="submit"
                        className='bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out'
                    >Send Email</button>
                </div>
            </div>

        </form>
    )
}

export default forgotPassword
