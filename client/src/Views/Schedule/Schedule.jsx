import Nav from "../../Components/NavBar/Nav";
import { useForm, Controller } from "react-hook-form";
import Cards from "../../Components/CardsComponent/Cards/Cards";
import styles from "./Schedule.module.css";
import { auth } from "../../firebase/firebase.config";
import { useEffect } from "react";
import { postDate } from "../../functions/post";
import SelectDoctor from './SelectDoctor'
import ScheduleWithCalendar from "./ScheduleWithCalendar";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../contextAPI/ThemeContext";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();
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
    //toast-notification
    toast(t("SCHEDULE PAGE.TOAST"), {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const selectDoctor = (id) => {
    const doctorId = id;
    setValue("doctorId", doctorId);
  };

  function generateScheduleOptions() {
    const { t } = useTranslation();
    const { darkMode } = useTheme();

    const options = [];
    const startTime = 8 * 60;
    const endTime = 16 * 60;
    const interval = 30;

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

  return (
    <>
      <div
        className="bg-gradient-to-br from-blue-300 to-gray-100 shadow-lg"
        style={{ background: darkMode ? "#00519C" : "" }}>
        <div className="w-full mb-6">
          <Nav />
        </div>

        <Cards />
        <div className="flex flex-row justify-around">
          <div className={styles.title}>
            <p className="font-bold mb-1"></p>
            <div
              className={styles.userdetails}
              style={{ background: darkMode ? "#00519C" : "" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div
                  className={styles.inputbox}
                  style={{ background: darkMode ? "black" : "#b5e8fc" }}>
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
                        style={{ background: darkMode ? "#00519C" : "" }}>
                        <SelectDoctor selectDoctor={selectDoctor} />
                      </select>
                    )}
                  />
                  {errors.doctorId && (
                    <p className="text-red-800">{errors.doctorId.message}</p>
                  )}
                </div>

                <div
                  className={styles.inputbox}
                  style={{ background: darkMode ? "black" : "#b5e8fc" }}>
                  <label>User ID</label>
                  <Controller
                    name="userId"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "You must add your DNI",
                    }}
                    render={({ field }) => (
                      <input
                        type="text"
                        {...field}
                        disabled
                        style={{ background: darkMode ? "#00519C" : "" }}
                      />
                    )}
                  />
                  {errors.userId && (
                    <p className="text-red-800">{errors.userId.message}</p>
                  )}
                </div>

                <div
                  className={styles.inputbox}
                  style={{ background: darkMode ? "black" : "#b5e8fc" }}>
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
                        style={{ background: darkMode ? "#00519C" : "" }}>
                        <option value="">-- Select a Schedule --</option>
                        {generateScheduleOptions()}
                      </select>
                    )}
                  />
                  {errors.schedule && (
                    <p className="text-red-800">{errors.schedule.message}</p>
                  )}
                </div>

                <div
                  className={styles.inputbox}
                  style={{ background: darkMode ? "black" : "#b5e8fc" }}>
                  <label>Date</label>
                  <Controller
                    name="date"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "You must choose a date",
                    }}
                    render={({ field }) => (
                      <input
                        type="date"
                        {...field}
                        style={{ background: darkMode ? "#00519C" : "" }}
                      />
                    )}
                  />
                  {errors.date && (
                    <p className="text-red-800">{errors.date.message}</p>
                  )}
                </div>

                <button
                  className="w-40 font-bold bg-blue-400 hover:bg-indigo-500 hover:scale-110 rounded-2xl transition ease-in-out duration-300 mb-2"
                  type="submit"
                  style={{ background: darkMode ? "black" : "" }}>
                  Save
                </button>
              </form>
            </div>
          </div>
          <ScheduleWithCalendar />
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default Form;
