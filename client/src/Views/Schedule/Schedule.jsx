import Nav from "../../Components/NavBar/Nav";
import { useForm, Controller } from "react-hook-form";
import Cards from "../../Components/CardsComponent/Cards/Cards";
import styles from "./Schedule.module.css";
import { auth } from "../../firebase/firebase.config";
import { useEffect } from "react";
import { postDate } from "../../functions/post";
import SelectDoctor from "./SelectDoctor";
import ScheduleWithCalendar from "./ScheduleWithCalendar";
import Footer from "../../Components/Footer/Footer";

const Form = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  // Manejar el cambio del formulario
  const handleChange = (name, value) => {
    setValue(name, value);
  };

  const onSubmit = async (data) => {
    postDate(data);
  };

  const selectDoctor = (id) => {
    const doctorId = id;
    setValue("doctorId", doctorId);
  };

  function generateScheduleOptions() {
    const options = [];
    const startTime = 8 * 60; // 8 a.m. en minutos
    const endTime = 16 * 60; // 4 p.m. en minutos
    const interval = 30; // Intervalo de 30 minutos

    for (let time = startTime; time <= endTime; time += interval) {
      const hours = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
      const minutes = (time % 60).toString().padStart(2, "0");
      const timeString = `${hours}:${minutes}`;
      options.push(
        <option key={timeString} value={timeString}>
          {timeString}
        </option>
      );
    }

    return options;
  }

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
    <>
      <div className={styles.nuevo}>
        <div className="w-full">
          <Nav />
        </div>
        <div className={styles.container}>
          <Cards />
          <div className="flex flex-row justify-around">
            <div className={styles.title}>
              <p className="font-bold mb-1"></p>
              <div className={styles.userdetails}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.inputbox}>
                    <label className="mr-4">Doctor</label>
                    <Controller
                      name="doctorId"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "You must choose a doctor",
                      }}
                      className="mb-2"
                      render={({ field }) => (
                        <select
                          className={styles.button2}
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                            handleChange("doctorId", e.target.value);
                            selectDoctor(e.target.value);
                          }}
                        >
                          <SelectDoctor selectDoctor={selectDoctor} />
                        </select>
                      )}
                    />
                    {errors.doctorId && (
                      <p className="text-red-800">{errors.doctorId.message}</p>
                    )}
                  </div>

                  <div className={styles.inputbox}>
                    <label>User ID</label>
                    <Controller
                      name="userId"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "You must add your DNI",
                      }}
                      render={({ field }) => (
                        <input type="text" {...field} disabled />
                      )}
                    />
                    {errors.userId && (
                      <p className="text-red-800">{errors.userId.message}</p>
                    )}
                  </div>

                  <div className={styles.inputbox}>
                    <label>Schedule</label>
                    <Controller
                      name="schedule"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "You must choose a business hours",
                      }}
                      className="mb-2"
                      render={({ field }) => (
                        <select
                          {...field}
                          className="flex flex-col w-full h-11 outline-none rounded-md border-gray-300 pl-4 pt-2 border-b-2 transition ease-in-out duration-300"
                        >
                          <option value="">-- Select a Schedule --</option>
                          {generateScheduleOptions()}
                        </select>
                      )}
                    />
                    {errors.schedule && (
                      <p className="text-red-800">{errors.schedule.message}</p>
                    )}
                  </div>

                  <div className={styles.inputbox}>
                    <label>Date</label>
                    <Controller
                      name="date"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "You must choose a date",
                      }}
                      render={({ field }) => <input type="date" {...field} />}
                    />
                    {errors.date && (
                      <p className="text-red-800">{errors.date.message}</p>
                    )}
                  </div>

                  <button
                    className="w-40 font-bold bg-blue-400 hover:bg-indigo-500 hover:scale-110 rounded-2xl transition ease-in-out duration-300"
                    type="submit"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
            <ScheduleWithCalendar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
