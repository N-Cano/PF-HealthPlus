
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

 const [detail, setDetail] = useState({});
  const id = form.datos
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patient);
  useEffect(() => {
    dispatch(getPatient(id));
    setDetail(patient);
  }, [dispatch]);


  return (
    <div className={styles.nuevo}>
    <div className={styles.container}>
      
    
    <div className={styles.title}> PROFILE
    <div className={styles.userdetails}>
    
           
            <div className={styles.inputbox}>
             <img src={""} alt="" />
             <h1   />
           </div>

           <div className={styles.inputbox}>
            <label >Name:{detail.name}</label>
            
            </div>
            <div className={styles.inputbox}>
            <label >LastName:{detail.LastName}</label>
            
            </div>
            <div className={styles.inputbox}>
            <label >Birthday:{detail.Birthday}</label>
            
            </div>
            <div className={styles.inputbox}>
            <label >DNI: {detail.dni}</label>
            
            </div>
            <Link to="/profileForm">
         <button className={styles.button2} type="submit" >Modificar Perfil</button>
                </Link>
      
        </div>
        </div>
        </div>
        </div>
     
  );
};
export default Profile;

