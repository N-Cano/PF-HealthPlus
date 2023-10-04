import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postEmail } from "../../functions/post";

const SignUp = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const user = await postEmail(data);
      navigate("/login");
      console.log(user);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  return (
    <main className="flex m-auto justify-center items-center flex-col h-screen bg-blue-200">
      <Link
        to="/login"
        className="absolute top-0 left-0 m-8 hover:scale-110 transition duration-300 ease-in-out bg-slate-950 text-neutral-50 w-20 p-2 rounded-2xl text-center"
      >
        Back
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center flex-col gap-2 rounded-2xl m-12 max-w-md w-full h-5/6 bg-blue-400">
          <div className="flex flex-col gap-4 p-8 text-center w-full">
            <label className="text-xl">Email</label>
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
                  className="p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none w-full"
                  type="email"
                  placeholder="Email..."
                />
              )}
            />
            {errors.email && <p className='text-red-800'>{errors.email.message}</p>}

            <label className="text-xl">Password</label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Este campo es obligatorio",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  className="p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none w-full"
                  type="password"
                  placeholder="Password..."
                />
              )}
            />
            {errors.password && <p className='text-red-800'>{errors.password.message}</p>}

          </div>

          <button
            type="submit"
            className="bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
};

export default SignUp;