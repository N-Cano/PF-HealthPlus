import Nav from "../../Components/NavBar/Nav";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Cards from "../../Components/CardsComponent/Cards/Cards";
import styles from "./Form.module.css";
import { auth } from "../../firebase/firebase.config";
import { useEffect } from "react";

const Form = () => {
  const { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

  // Manejar el cambio del formulario
  const handleChange = (name, value) => {
    setValue(name, value);
  };

  const onSubmit = async (data) => {
    // Formatear la fecha antes de enviarla al servidor
    const dateParts = data.date.split('-'); // Dividir la fecha por guiones
    const formattedDate = dateParts.reverse().join('-'); // Invertir y volver a unir las partes

    // Crear una copia de los datos con la fecha formateada
    const formattedData = { ...data, date: formattedDate };
    console.log(formattedData);


    await axios.post("http://localhost:3001/dates", formattedData);
    console.log("Datos Cargados", formattedData);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        const email = user.email;
        const id = user.uid;
        setValue("email", email);
        setValue("userId", id);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setValue]);

  useEffect(() => {
    // Guardar en el localStorage cada vez que el formulario cambia
    localStorage.setItem("form", JSON.stringify(getValues()));
  }, [getValues]);

  return (
    <div className={styles.nuevo}>
      <div className={styles.container}>
        <Nav />
        <Cards />
        <div className={styles.title}>
          SCHEDULE
          <div className={styles.userdetails}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputbox}>
                <label>Doctor:</label>
                <Controller
                  name="doctorId"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'You must choose a doctor',
                  }}
                  render={({ field }) => (
                    <select
                      className={styles.button2}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleChange("doctorId", e.target.value);
                      }}
                    >
                      <option value="">-- Select a Doctor --</option>
                      <option value="3mxD0sfUAWOzt4hpWIHa">Josep Conde</option>
                      <option value="7gBRp5ScJ8h4HEqOOCxl">Esmeralda Corral</option>
                      <option value="CC0EqVMbB6xLw4pXmph4">Sarai de La Cruz</option>
                      <option value="ErlDmNFdhBCnGGOQCCV5">Driss Guijarro</option>
                      <option value="QO68cneJcP6tarU5u1iS">Valentin Alegre</option>
                    </select>
                  )}
                />
                {errors.doctorId && <p className='text-red-800'>{errors.doctorId.message}</p>}
              </div>

              <div className={styles.inputbox}>
                <label>DNI:</label>
                <Controller
                  name="userId"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'You must add your DNI',
                  }}
                  render={({ field }) => (
                    <input type="text" {...field} />
                  )}
                />
                {errors.userId && <p className='text-red-800'>{errors.userId.message}</p>}
              </div>
              <div className={styles.inputbox}>
                <label>Schedule:</label>
                <Controller
                  name="schedule"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'You must choose a business hours',
                  }}
                  render={({ field }) => (
                    <input type="time" {...field} />
                  )}
                />
                {errors.schedule && <p className='text-red-800'>{errors.schedule.message}</p>}
              </div>
              <div className={styles.inputbox}>
                <label>Date:</label>
                <Controller
                  name="date"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'You must choose a date',
                  }}
                  render={({ field }) => (
                    <input type="date" {...field} />
                  )}
                />
                {errors.date && <p className='text-red-800'>{errors.date.message}</p>}
              </div>
              <button className={styles.button2} type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
