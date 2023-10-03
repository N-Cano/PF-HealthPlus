import Nav from "../../Components/NavBar/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../Components/CardsComponent/Cards/Cards";
import styles from './Form.module.css';
import { auth } from "../../firebase/firebase.config";

const Form = () => {
  const [form, setForm] = useState({
    doctorId: "",
    userId: "",
    date: "",
    schedule: "",
    email: "",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        const email = user.email;
        setForm({ ...form, email });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []); 

  console.log(form);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });

  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/dates", form);
    console.log("Datos Cargados");
  };

  return (
    <div className={styles.nuevo}>
    <div className={styles.container}>
      <Nav/>
    <Cards/>
    <div className={styles.title}> SCHEDULE
    <div className={styles.userdetails}>
    <form onSubmit={submitHandler} >
           <div className={styles.inputbox}>
            <label >Doctor:</label>
            <select  className={styles.button2} type="text"  name="doctorId" value={form.doctorId} onChange={changeHandler}>
            <option value="">-- Select a Doctor --</option>
             <option value="3mxD0sfUAWOzt4hpWIHa">Josep Conde</option>
             <option value="7gBRp5ScJ8h4HEqOOCxl">Esmeralda Corral</option>
             <option value="CC0EqVMbB6xLw4pXmph4">Sarai de La Cruz</option>
             <option value="ErlDmNFdhBCnGGOQCCV5">Driss Guijarro</option>
             <option value="QO68cneJcP6tarU5u1iS">Valentin Alegre</option>
            </select>
            </div>
            
           <div className={styles.inputbox}>
            <label >DNI:</label>
            <input type="text"  name="userId" value={form.userId} onChange={changeHandler}/>
            </div>
            <div className={styles.inputbox}>
            <label >Schedule:</label>
            <input type="time"  name="schedule" value={form.schedule} onChange={changeHandler}/>
            </div>
            <div className={styles.inputbox}>
            <label >Date:</label>
            <input type="date"  name="date" value={form.date} onChange={changeHandler}/>
            </div>
            <button className={styles.button2} type="submit" >Save</button>
        </form>
        </div>
        </div>
        </div>
        </div>
     
  );
};
export default Form;

