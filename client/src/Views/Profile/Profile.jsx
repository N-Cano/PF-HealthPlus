
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './ProfileForm.module.css';
import Nav from "../../Components/NavBar/Nav";

const Profile = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/users/profile", form);
    console.log("Datos Cargados");
  };



  return (
    <div className={styles.nuevo}>
    <div className={styles.container}>
      <Nav/>
    
    <div className={styles.title}> PROFILE
    <div className={styles.userdetails}>
    <form onSubmit={submitHandler} >
           
            <div className={styles.inputbox}>
             <img src={""} alt="" />
             <h1   />
           </div>

           <div className={styles.inputbox}>
            <label >Name:</label>
            
            </div>
            <div className={styles.inputbox}>
            <label >LastName:</label>
            
            </div>
            <div className={styles.inputbox}>
            <label >Birthday:</label>
            
            </div>
            <div className={styles.inputbox}>
            <label >DNI:</label>
            
            </div>
            <Link to="/profileForm">
         <button className={styles.button2} type="submit" >Modificar Perfil</button>
                </Link>
      
        </form>
        </div>
        </div>
        </div>
        </div>
     
  );
};
export default Profile;

