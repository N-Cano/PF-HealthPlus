import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase.config";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Dates = (props) => {
  const cancelDate = () => {
    axios.put(`http://localhost:3001/dates/cancel`, {
      userId: props.userId,
      dateId: props.dateId,
      doctorId: props.doctorId,
    });
    alert("llevar a un forn para dejar un mensaje?");
  };
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
  const [review, setReview] = useState(false);

  return (
    <div className="w-full bg-blue-200 p-8 " key={props.dateId}>
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
                value={form.punctuation}
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
              onClick={() => setReview(false)}
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
