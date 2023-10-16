import Nav from "../../Components/NavBar/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../../firebase/firebase.config";
import styles from "./ProfileForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setImage } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contextAPI/ThemeContext";
import { Footer } from "../../Components";

const ProfileForm = () => {
  const { darkMode } = useTheme();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    lastName: "",
    name: "",
    date: "",
    userId: "",
    uid: "",
    image: null,
  });

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

    if (event.target.name === "image") {
      setForm({ ...form, image: event.target.files[0] });
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      dispatch(setImage(imageUrl));
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("lastName", form.lastName);
    formData.append("date", form.date);
    formData.append("userId", form.userId);
    formData.append("uid", form.uid);
    formData.append("image", form.image); // Add the image to the FormData

    try {
      await axios.put("http://localhost:3001/users/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to handle form data
        },
      });
      console.log("Datos Cargados");
      navigate("/profile");
    } catch (error) {
      // Maneja el error si la solicitud axios falla
      console.error("Error al enviar el formulario:", error);
    }
  };

  const imageSrc = useSelector((state) => state.imageSrc);
  const dispatch = useDispatch();

  return (
    <div
      className="w-full h-full bg-[#daf1f8] flex flex-col justify-between"
      style={{ background: darkMode ? "#00519C" : "" }}>
      <Nav />
      <h2 className="text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2 text-center max-w-md m-auto mt-8">
        Modify Profile
      </h2>
      <div className="flex justify-center">
        <div className={styles.title}>
          <div className={styles.userdetails}>
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label>Select img:</label>
                <img src={imageSrc} alt="" />
                <input
                  type="file"
                  name="image"
                  accept="image/*" // Add accept attribute to allow only image files
                  onChange={changeHandler}
                />
              </div>

              <div className={styles.inputbox}>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputbox}>
                <label>LastName:</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputbox}>
                <label>Birthday:</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputbox}>
                <label>DNI:</label>
                <input
                  type="text"
                  name="userId"
                  value={form.userId}
                  onChange={changeHandler}
                />
              </div>

              <button
                className="font-bold w-60 bg-blue-400 hover:bg-indigo-500 hover:scale-110 rounded-2xl transition ease-in-out duration-300 m-24 py-4"
                type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileForm;
