/* eslint-disable react/prop-types */
import {
  Home,
  Landing,
  Schedule,
  Login,
  ProfileForm,
  Payment,
  Plan,
  ForgotPassgord,
  SignUp,
  Detail,
  Profile,
  MyDates,
  DetailReviews,
} from "./Views";

import { Route, Routes } from "react-router-dom";
import DashBoardUsers from "./Views/DashBoard/DashBoardUsers";
import Detail2 from "./Views/Detail/DetailDash";
import PostDocs from "./Components/Create/PostDocs/PostDocs";
import PostUsers from "./Components/Create/PostUsers/PostUsers";
import { UserAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import DashBoard from "./Views/DashBoard/Dashboard";
import Bridge from "./Views/Bridge/Bridge";
import DetailUsers from "./Views/Detail/DetailUsers";
import "tailwindcss/tailwind.css";
import { useTheme } from "./contextAPI/ThemeContext";
import "./contextAPI/DarkMode.css";
import Graphics from "./Views/Grafics/Graphics";
import Review from "./Views/Review/Review";

const App = () => {
  const { darkMode } = useTheme();

  const { user } = UserAuth();
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to={"/login"} />;
  };

  const canAccessDashboard = user?.email === "admin@admin.com";

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/create"
          element={
            <RequireAuth>
              <Schedule />
            </RequireAuth>
          }
        />
        <Route
          path="/profileForm"
          element={
            <RequireAuth>
              <ProfileForm />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/payment"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route
          path="/plan"
          element={
            <RequireAuth>
              <Plan />
            </RequireAuth>
          }
        />
        <Route path="/forgotPassword" element={<ForgotPassgord />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/detail/:id"
          element={
            <RequireAuth>
              <Detail />
            </RequireAuth>
          }
        />
        <Route
          path="/detail2/:id"
          element={
            <RequireAuth>
              <Detail2 />
            </RequireAuth>
          }
        />
        <Route
          path="/detailReviews/:id"
          element={
            <RequireAuth>
              <DetailReviews />
            </RequireAuth>
          }
        />
        <Route
          path="/DetailUsers/:id"
          element={
            <RequireAuth>
              <DetailUsers />
            </RequireAuth>
          }
        />
        <Route path="/myDates" element={<MyDates />} />

        <Route
          path="/dashboard"
          element={
            user?.email === "admin@admin.com" ? (
              <RequireAuth>
                <DashBoard />
              </RequireAuth>
            ) : (
              <Navigate to={"/home"} />
            )
          }
        />

        <Route
          path="/dashboardusers"
          element={
            user?.email === "admin@admin.com" ? (
              <RequireAuth>
                <DashBoard />
              </RequireAuth>
            ) : (
              <Navigate to={"/home"} />
            )
          }
        />

        <Route
          path="/postdocs"
          element={
            <RequireAuth>
              <PostDocs />
            </RequireAuth>
          }
        />
        <Route
          path="/postusers"
          element={
            <RequireAuth>
              <PostUsers />
            </RequireAuth>
          }
        />
        <Route
          path="/confirm"
          element={
            <RequireAuth>
              <Bridge />
            </RequireAuth>
          }
        />
        <Route
          path="/graphics"
          element={
            <RequireAuth>
              <Graphics />
            </RequireAuth>
          }
        />
        <Route
          path="/review/:dateId"
          element={
            <RequireAuth>
              <Review />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
