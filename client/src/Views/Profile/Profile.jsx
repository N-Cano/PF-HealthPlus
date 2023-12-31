import { Link } from "react-router-dom";
import styles from "./ProfileForm.module.css";
import Nav from "../../Components/NavBar/Nav";
import { getPatient } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";

const Profile = () => {
  const img = 'https://res.cloudinary.com/drpge2a0c/image/upload/v1697037341/userImages/blank-profile-picture-973460_960_720_sgp40b.webp'
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  const [form, setForm] = useState({
    datos: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const id = form.datos;
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patient);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        const datos = user.uid;
        setForm({ ...form, datos });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    dispatch(getPatient(id))
      .then(() => {
        setDetail(patient);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los datos del paciente:", error);
        setIsLoading(false);
      });
  }, [dispatch, id]);

  return (
    <>
      <div
        className="w-full h-screen bg-[#daf1f8]"
        style={{ background: darkMode ? "#00519C" : "" }}>
        <Nav />
        <h2 className="text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2 text-center max-w-md m-auto mt-8">
          {t("PROFILE.YOURPROFILE")}
        </h2>
        <div
          className={styles.container}
          style={{ background: darkMode ? "#00519C" : "", }}>
          <div className={styles.title}>
            {isLoading ? (
              <div>{t("PROFILE.LOADING")}</div>
            ) : (
              <>
                <div className="max-h-[500px] h-full flex flex-col justify-center">
                  <div className="">
                    <img src={""} alt="" />
                    <h1 />
                  </div>

                  <div
                    className="mb-4 bg-blue-200 max-w-2xl p-2 rounded-2xl"
                    style={{ background: darkMode ? "black" : "" }}>
                    <label>
                      {t("PROFILE.NAME")}: {patient.name}
                    </label>
                  </div>
                  <div
                    className="mb-4 bg-blue-200 max-w-2xl p-2 rounded-2xl"
                    style={{ background: darkMode ? "black" : "" }}>
                    <label>
                      {t("PROFILE.LASTNAME")}: {patient.lastName}
                    </label>
                  </div>
                  <div
                    className="mb-4 bg-blue-200 max-w-2xl p-2 rounded-2xl"
                    style={{ background: darkMode ? "black" : "" }}>
                    <label >
                      {t("PROFILE.BIRTHDAY")}: {patient.date}
                    </label>
                  </div>
                  <div
                    className="mb-4 bg-blue-200 max-w-2xl p-2 rounded-2xl"
                    style={{ background: darkMode ? "black" : "" }}>
                    <label>
                      {t("PROFILE.DNI")}: {patient.userId}
                    </label>
                  </div>
                </div>
                <Link to="/profileForm">
                  <button
                    className="font-bold w-60 bg-blue-400 hover:bg-indigo-500 hover:scale-110 rounded-2xl transition ease-in-out duration-300 mt-12 absolute bottom-0 m-auto"
                    type="submit"
                  >
                    {t("PROFILE.MODIFYPROFILE")}
                  </button>
                </Link>
                <div className="w-96 content-center mt-2 absolute top-0 right-0">
                  <img
                    className="object-cover w-full mt-4 hover:scale-110 transition ease-in-out duration-300 rounded-full"
                    src={patient.photo?.secure_url || img}
                    alt="profile photo"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
