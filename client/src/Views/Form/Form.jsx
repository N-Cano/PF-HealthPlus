import Nav from "../../Components/NavBar/Nav";
import { useState } from "react";
import axios from "axios"
import Cards from "../../Components/CardsComponent/Cards/Cards"
import styles from './Form.module.css'

const Form = () => {

  const [form,setForm] = useState({
        name: "",
        dni: "",
        lastname: "",
        birthdate: "",
      });
      console.log(form);

      const changeHandler = (event)=>{
          const property = event.target.name;
          const value = event.target.value;
          setForm({...form, [property]:value})
          // validate({...form, [property]:value})
      }

      const submitHandler =(event)=>{
        event.preventDefault()
        axios.post("http://localhost:3001/dates",form);
        console.log("Datos Cargados");
      }
  return (
    
    <div className={styles.container}>
      <Nav/>
    <Cards/>
    <div className={styles.title}> SCHEDULE
    <div className={styles.userdetails}>
    <form action="#" onSubmit={submitHandler} id="personalInfoForm">
           <div className={styles.inputbox}>
            <label for="firstName">Doctor:</label>
            <select  className={styles.button2} type="text" id="firstName" name="name" value={form.name} onChange={changeHandler}>
            <option value="">-- Select a Doctor --</option>
             <option value="3mxD0sfUAWOzt4hpWIHa">Josep Conde</option>
             <option value="7gBRp5ScJ8h4HEqOOCxl">Esmeralda Corral</option>
             <option value="CC0EqVMbB6xLw4pXmph4">Sarai de La Cruz</option>
             <option value="ErlDmNFdhBCnGGOQCCV5">Driss Guijarro</option>
             <option value="QO68cneJcP6tarU5u1iS">Valentin Alegre</option>
            </select>
            </div>
            
           <div className={styles.inputbox}>
            <label for="dni">DNI:</label>
            <input type="text" id="dni" name="dni" value={form.dni} onChange={changeHandler}/>
            </div>
            <div className={styles.inputbox}>
            <label for="lastName">Schedule:</label>
            <input type="time" id="lastName" name="lastname" value={form.lastname} onChange={changeHandler}/>
            </div>
            <div className={styles.inputbox}>
            <label for="birthdate">Date:</label>
            <input type="date" id="birthdate" name="birthdate" value={form.birthdate} onChange={changeHandler}/>
            </div>
            <button className={styles.button2} type="submit" >Save</button>
        </form>
        </div>
        </div>
        </div>
     
  );
};
export default Form;

{/* // <div className={styles.container}>
        //   <div className={styles.title}>Registration</div>
        // <form action="#">
        // <div className={styles.userdetails}>
        // <div className={styles.inputbox}>
        //       <span className={styles.details}>Full name</span>
        //       <input type="text" placeholder="enter " ></input>
        //     </div>
        //     <div className={styles.inputbox}>
        //       <span className={styles.details}>username</span>
        //       <input type="text" placeholder="enter "></input>
        //     </div>
        //     <div className={styles.inputbox}>
        //       <span className={styles.details}>email</span>
        //       <input type="text"placeholder="enter " ></input>
        //     </div>
        //     <div className={styles.inputbox}>
        //       <span className={styles.details}>number</span>
        //       <input type="text"placeholder="enter " ></input>
        //     </div>
        //     <div className={styles.inputbox}>
        //       <span className={styles.details}>passwordd</span>
        //       <input type="text"placeholder="enter " ></input>
        //     </div>
        //     <div className={styles.inputbox}>
        //       <span className={styles.details}>confirme</span>
        //       <input type="text" placeholder="enter "></input>
        //     </div>
        //     </div>
            
        //     </form>
        //     <div className={styles.button}>
        //       <input type="submit" value="Register"></input>
        //     </div>
        </div> */}