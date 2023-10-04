import { Home, Landing, Form, Login, ProfileForm, Payment, Plan, ForgotPassgord, SignUp, Detail , Profile} from "./Views";
import { Route, Routes, useLocation } from "react-router-dom";
// import NavBar from "./Components/NavBar/NavBar";
import "tailwindcss/tailwind.css";
import { UserAuth } from './context/AuthContext'
import { Navigate } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  const { user } = UserAuth();
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to={"/login"} />
  };

  return (
    <div>
      {/* {pathname === "/" && <NavBar />} */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<RequireAuth>
          <Home />
        </RequireAuth>} />
        <Route path="/create" element={<Form />} />
        <Route path="/profileForm" element={<ProfileForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/forgotPassword" element={<ForgotPassgord />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
