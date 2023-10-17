import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contextAPI/ThemeContext";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../Components/NavBar/Nav";
import { Footer } from "../../Components";
import styles from "./Review.module.css";

const Review = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    punctuation: "",
    comment: "",
    date: "",
    userId: "",
    doctorId: "",
    dateId: "",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function(user) {
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
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("punctuation", form.punctuation);
    formData.append("comment", form.comment);
    formData.append("date", form.date);
    formData.append("userId", form.userId);
    formData.append("doctorId", form.doctorId);
    formData.append("dateId", form.dateId);

    try {
      await updateProfile(formData);
      console.log("Datos Cargados");
      navigate("/profile");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const dispatch = useDispatch();

  return (
    <div
      className="w-full h-full bg-[#daf1f8] flex flex-col justify-between"
      style={{ background: darkMode ? "#00519C" : "" }}
    >
      <Nav />
      <h2 className="text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2 text-center max-w-md m-auto mt-8">
        Review Doctor
      </h2>
      <div className="flex justify-center">
        <div className={styles.title}>
          <div className={styles.userdetails}>
            <form onSubmit={submitHandler}>
              <div className={styles.inputbox}>
                <label>comment:</label>
                <input
                  type="text"
                  name="comment"
                  value={form.comment}
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputbox}>
                <label>punctuation:</label>
                <input
                  type="text"
                  name="punctuation"
                  value={form.punctuation}
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputbox}>
                <label>{t("PROFILEFORM.BIRTHDAY")}:</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={changeHandler}
                />
              </div>

              <button
                className="font-bold w-60 bg-blue-400 hover:bg-indigo-500 hover:scale-110 rounded-2xl transition ease-in-out duration-300 m-24 py-4"
                type="submit"
              >
                {t("PROFILEFORM.SAVE")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Review;
