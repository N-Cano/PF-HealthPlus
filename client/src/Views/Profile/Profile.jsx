import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./ProfileForm.module.css";
import NavHome from "../../Components/NavBar/NavHome";
import { getPatient } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";

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
        setIsLoading(false); // Cuando los datos se cargan, establece isLoading en false
      })
      .catch((error) => {
        console.error("Error al cargar los datos del paciente:", error);
        setIsLoading(false); // Manejo de errores, establece isLoading en false
      });
  }, [dispatch, id]);

  return (
    <div className={styles.nuevo}>
      <div className={styles.container}>
        <Link to="/home">
          <button
            className="bg-slate-950 ml-[10px] mt-2 text-neutral-50 w-24 p-2 rounded-2xl hover:bg-slate-700 hover:scale-110 transition duration-300 ease-in-out mb-2"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            Back
          </button>
        </Link>
        <div
          className={styles.title}
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          YOUR PROFILE
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className={styles.userdetails}>
              <div className={styles.inputbox}>
                <img src={""} alt="" />
                <h1 />
              </div>

              <div className={styles.inputbox}>
                <label style={{ fontFamily: "Open Sans, sans-serif" }}>
                  Name: {patient.name}
                </label>
              </div>
              <div className={styles.inputbox}>
                <label style={{ fontFamily: "Open Sans, sans-serif" }}>
                  LastName: {patient.lastName}
                </label>
              </div>
              <div className={styles.inputbox}>
                <label style={{ fontFamily: "Open Sans, sans-serif" }}>
                  Birthday: {patient.date}
                </label>
              </div>
              <div className={styles.inputbox}>
                <label style={{ fontFamily: "Open Sans, sans-serif" }}>
                  DNI: {patient.userId}
                </label>
              </div>
              <Link to="/profileForm">
                <button
                  className={styles.button2}
                  type="submit"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  Modificar Perfil
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;