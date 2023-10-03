
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <main className="flex m-auto justify-center items-center flex-col h-screen">
      <Link
        to="/login"
        className="absolute top-0 left-0 m-8 hover:scale-110 transition duration-300 ease-in-out bg-slate-950 text-neutral-50 w-20 p-2 rounded-2xl text-center"
      >
        Back
      </Link>
      <form>
        <div className="flex justify-center items-center flex-col gap-2 mb-6 max-w-md w-full h-5/6">
          <div className="flex flex-col gap-4 bg-blue-400 p-8 rounded-2xl">
            <label className="text-xl">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none w-72"
              type="email"
              placeholder="Email..."
              name="email"></input>

            <label className="text-xl">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 pl-4 placeholder-slate-600 rounded-2xl focus:outline-none w-72"
              type="password"
              placeholder="Password..."
              name="password"></input>

          </div>

          <button
            onClick={submit}
            type="submit"
            className="bg-slate-950 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out">
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
