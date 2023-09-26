import { Home, Landing, Form, Login, Profile, Payment, Plan } from "./Views";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import 'tailwindcss/tailwind.css'

const App = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/home" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </div>
  );
};

export default App;
