import doctors from "../../assets/doctors.png"
const Login = () => {


    return (
        <div className='h-screen flex justify-center items-start flex-col relative'>
            <div className='bg-blue-400 rounded-2xl max-h-[32rem] h-full text-center p-8 ml-20 max-w-md w-full' >
                <h2
                    className='text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2'
                >Sign In</h2>

                <div className='flex flex-col gap-2 mb-6'>
                    <label className='font-bold text-xl'>Email</label>
                    <input
                        className='p-2 pl-4 placeholder-slate-600 rounded-2xl'
                        type="text"
                        placeholder="Email..."
                    ></input>
                </div>

                <div className='flex flex-col gap-2 mb-6'>
                    <label className='font-bold text-xl'>Password</label>
                    <input className='p-2 pl-4 placeholder-slate-600 rounded-2xl' type="password"></input>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='flex text-xs w-full justify-between mb-8'>
                        <button>Forgot Password</button>
                        <button>Sign Up</button>
                    </div>
                    <button>Sign in with Google</button>
                    <button
                        type="submit"
                        value="password"
                        className='bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-900 transition duration-300 ease-in-out'
                    >START</button>
                </div>
            </div>
            <img src={doctors} className="w-[50rem] absolute right-0 bottom-0" />
        </div>
    )
}
export default Login
