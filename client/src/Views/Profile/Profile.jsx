
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './ProfileForm.module.css';
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
  const [detail, setDetail] = useState({})
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patient);

  const [userLoaded, setUserLoaded] = useState(false);
  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(function (user) {
    if (user) {
      const datos = user.uid;
      setForm({ ...form, datos });
      dispatch(getPatient(datos));
    setDetail(patient);
      
      setUserLoaded(true); // Marcar que los datos del usuario se han cargado
    }
  });

  return () => {
    unsubscribe();
  };
}, []); 




  return (
  <div className={styles.nuevo}>
    {userLoaded ? (
      <div className={styles.container}>
        <div className={styles.title}>PROFILE</div>
        <div className={styles.userdetails}>
          <div className={styles.inputbox}>
            <img src={""} alt="" />
            <h1 />
          </div>

          <div className={styles.inputbox}>
            <label>Name: {detail.name}</label>
          </div>
          <div className={styles.inputbox}>
            <label>LastName: {detail.lastName}</label>
          </div>
          <div className={styles.inputbox}>
            <label>Birthday: {detail.date}</label>
          </div>
          <div className={styles.inputbox}>
            <label>DNI: {detail.userId}</label>
          </div>
          <Link to="/profileForm">
            <button className={styles.button2} type="submit">
              Modificar Perfil
            </button>
          </Link>
          <Link to="/home">
            <button className={styles.button2} type="submit">
              VOLVER
            </button>
          </Link>
        </div>
      </div>
    ) : (
      // Puedes mostrar un indicador de carga aquí mientras se cargan los datos del usuario
      <p>Cargando...</p>
    )}
  </div>
);

};
export default Profile;

