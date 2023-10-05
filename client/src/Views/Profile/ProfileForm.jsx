import Nav from "../../Components/NavBar/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase.config";
import styles from './ProfileForm.module.css';
// import { auth } from "../../firebase/firebase.config";
import { useSelector, useDispatch } from 'react-redux';
import { setImage } from '../../redux/actions';
import { Link } from "react-router-dom";

const Profile = () => {
  const [form, setForm] = useState({
    lastName:"",
    name:"",
    date:"",
    userId:"",
    uid:"",
  });
  console.log(form);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        const uid = user.uid;
        setForm({ ...form, uid });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []); 


  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });

    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    dispatch(setImage(imageUrl));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3001/users/profile", form);
    console.log("Datos Cargados");
  };

  const imageSrc = useSelector((state) => state.imageSrc);
  const dispatch = useDispatch();


  return (
    <div className={styles.nuevo}>
    <div className={styles.container}>
      {/* <Nav/> */}
    
    <div className={styles.title}> PROFILE
    <div className={styles.userdetails}>
    <form onSubmit={submitHandler} >
           
            <div className={styles.inputbox}>
             <img src={imageSrc} alt="" />
             <input type="file" name="img" value={form.img} onChange={changeHandler} />
           </div>

           <div className={styles.inputbox}>
            <label >Name:</label>
            <input type="text"  name="name" value={form.name} onChange={changeHandler}/>
            </div>
            <div className={styles.inputbox}>
            <label >LastName:</label>
            <input type="text"  name="lastName" value={form.lastName} onChange={changeHandler}/>
            </div>
            <div className={styles.inputbox}>
            <label >Birthday:</label>
            <input type="date"  name="date" value={form.date} onChange={changeHandler}/>
            </div>
            <div className={styles.inputbox}>
            <label >DNI:</label>
            <input type="text"  name="userId" value={form.userId} onChange={changeHandler}/>
            </div>
            

            <button className={styles.button2} type="submit" >Save</button>
            <Link to="/profile">
            <button className={styles.button2} type="submit">
              VOLVER
            </button>
          </Link>
        </form>
        </div>
        </div>
        </div>
        </div>
     
  );
};
export default Profile;

