
import { deleteDate } from "./deleteDate";
import { useTheme } from "../../../contextAPI/ThemeContext";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { cancelDate } from "./deleteDate";

const Dates = (props) => {

  const { darkMode } = useTheme();
  

  const [form, setForm] = useState({
    punctuation: "",
    comment: "",
    date: "",
    userId: props.userId,
    doctorId: props.doctorId,
    dateId: props.dateId,
  });
  console.log(form);

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

    try {
      await axios.post("http://localhost:3001/doctors/comment", form);
      setReview(false);
      console.log(" Comentario Cargado");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
  const [review, setReview] = useState(false);

  return (
    <div
      className="w-full bg-blue-200 p-8 "
      key={props.dateId}
      style={{
        backgroundColor: darkMode ? "#00519C" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {props.status === "pending" ? (
        <button
          onClick={cancelDate}
          className="absolute right-0 font-bold bg-red-600 p-2 rounded-full"
        >
          X
        </button>
      ) : props.status === "taken" ? (
        <button
          onClick={() => setReview(true)}
          className="absolute right-0 font-bold bg-red-600 p-2 rounded-full"
        >
          Review
        </button>
      ) : null}

      <div className="flex gap-4 ">
        <p>Dr: {props.doctorName}</p>
        <p>Specialty: {props.specialty}</p>
        <p>date: {props.date}</p>
        <p>schedule: {props.schedule}</p>
        <p>status: {props.status}</p>
      </div>
      {review && (
        <div>
          <form onSubmit={submitHandler}>
            <div>
              <label>comment:</label>
              <input
                type="text"
                name="comment"
                value={form.comment}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>punctuation:</label>
              <input
                type="text"
                name="punctuation"
                value={Number(form.punctuation)}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>a:</label>
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
              onSubmit={submitHandler}
            >
              X
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dates;
