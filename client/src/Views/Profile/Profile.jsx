import { Link } from "react-router-dom";
import styles from "./ProfileForm.module.css";
import Nav from "../../Components/NavBar/Nav";
import { getPatient } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import img from "../../assets/blank-profile-picture-973460_960_720.webp";
import Footer from "../../Components/Footer/Footer";

const Profile = () => {
  const [form, setForm] = useState({
    datos: "",
  });
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para indicar la carga
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
      <div className="w-full h-screen bg-[#daf1f8]">
        <Nav />
        <h2 className="text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2 text-center max-w-md m-auto mt-8">
          Your Profile
        </h2>
        <div className={styles.container}>
          <div
            className={styles.title}
            style={{ fontFamily: "Rubik, sans-serif" }}>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                <div className="max-h-[500px] h-full flex flex-col justify-center">
                  <div className="">
                    <img src={""} alt="" />
                    <h1 />
                  </div>

                  <div className="mb-4 bg-blue-200 max-w-2xl p-2 rounded-2xl">
                    <label style={{ fontFamily: "Open Sans, sans-serif" }}>
                      Name: {patient.name}
                    </label>
                  </div>
                  <div className="mb-4 bg-blue-200 max-w-2xl p-2 rounded-2xl">
                    <label style={{ fontFamily: "Open Sans, sans-serif" }}>
                      LastName: {patient.lastName}
                    </label>
                  </div>
                  <div className="mb-4 bg-blue-200 max-w-2xl p-2 rounded-2xl">
                    <label style={{ fontFamily: "Open Sans, sans-serif" }}>
                      Birthday: {patient.date}
                    </label>
                  </div>
                  <div className="mb-4 bg-blue-200 max-w-2xl p-2 rounded-2xl">
                    <label style={{ fontFamily: "Open Sans, sans-serif" }}>
                      DNI: {patient.userId}
                    </label>
                  </div>
                </div>
                <Link to="/profileForm">
                  <button
                    className="font-bold w-60 bg-blue-400 hover:bg-indigo-500 hover:scale-110 rounded-2xl transition ease-in-out duration-300 mt-12 absolute bottom-0 m-auto"
                    type="submit"
                    style={{ fontFamily: "Open Sans, sans-serif" }}>
                    Modify Profile
                  </button>
                </Link>
                <div className="w-96 content-center mt-2 absolute top-0 right-0">
                  <img
                    className="object-cover w-full mt-4 hover:scale-110 transition ease-in-out duration-300 rounded-full"
                    src={img}
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
