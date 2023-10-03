import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await sendPasswordResetEmail(auth, data.email);
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex m-auto justify-center items-center flex-col h-screen bg-blue-200'>
            <Link
                to='/login'
                className='absolute top-0 left-0 m-8 hover:scale-110 transition duration-300 ease-in-out bg-slate-950 text-neutral-50 w-20 p-2 rounded-2xl text-center'
            >
                Back
            </Link>

            <div className='flex justify-center flex-col gap-2 mb-6 max-w-md w-full h-5/6'>
                <div className='flex flex-col items-center gap-8 bg-blue-400 p-8 rounded-2xl'>
                    <label className='font-bold text-2xl'>Email</label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Ingrese una dirección de correo electrónico válida",
                            },
                        }}
                        render={({ field }) => (
                            <input
                                {...field}
                                className='p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none w-72'
                                type="email"
                                placeholder="Email..."
                            />
                        )}
                    />
                    {errors.email && <p className='text-red-800'>{errors.email.message}</p>}
                    <button
                        type="submit"
                        className='bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out'
                    >
                        Send Email
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ForgotPassword;