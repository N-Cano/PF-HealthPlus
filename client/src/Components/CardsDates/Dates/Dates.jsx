import { useTheme } from "../../../contextAPI/ThemeContext";
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
    date: props.date,
    userId: props.userId,
    doctorId: props.doctorId,
    dateId: props.dateId,
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

  const cancelHandler = () => {
    cancelDate(props);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/doctors/comment", form);
      setReview(false);
      window.location.reload();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
  const [review, setReview] = useState(false);

  return (
    <div
      className="w-full bg-blue-200 p-8 flex flex-col justify-between items-center rounded-2xl"
      key={props.dateId}
      style={{
        backgroundColor: darkMode ? "#00519C" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="flex flex-row justify-between items-center rounded-2xl space-x-20">
        <div className="flex gap-4 ">
          <p>Dr: {props.doctorName}</p>
          <p>Specialty: {props.specialty}</p>
          <p>date: {props.date}</p>
          <p>schedule: {props.schedule}</p>
          <p>status: {props.status}</p>
        </div>

        {props.status === "pending" ? (
          <button
            onClick={cancelHandler}
            className="font-bold bg-red-600 hover:bg-red-800 transition ease-in-out duration-300 hover:scale-110 p-2 rounded-full"
          >
            X
          </button>
        ) : props.status === "taken" ? (
          <button
            onClick={() => setReview(true)}
            className="font-bold bg-red-600 hover:bg-red-800 transition ease-in-out duration-300 hover:scale-110 p-2 rounded-full"
          >
            Review
          </button>
        ) : null}
      </div>

      {review && (
        <div className="flex items-center justify-center">
          <form
            className="flex flex-col justify-center items-center mt-8 w-[500px] space-y-6"
            onSubmit={submitHandler}
          >
            <div className="text-center bg-blue-300 p-4 rounded-2xl w-full">
              <label className="font-bold">Comment:</label>
              <textarea
                name="comment"
                value={form.comment}
                onChange={changeHandler}
                maxLength={200}
                className="w-full rounded-2xl p-4 resize-none h-[150px]"
                placeholder="Write your comment here..."
                style={{ color: darkMode ? "black" : "" }}
              />
            </div>
            <div className="text-center bg-blue-300 p-4 rounded-2xl w-full">
              <label>Punctuation:</label>
              <select
                name="punctuation"
                value={form.punctuation}
                onChange={changeHandler}
                className="w-full rounded-2xl p-4"
                style={{ color: darkMode ? "black" : "" }}
              >
                <option value="">Select a punctuation</option>
                {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="font-bold w-60 bg-blue-400 hover:bg-indigo-500 hover:scale-110 rounded-2xl transition ease-in-out duration-300 m-24 py-4"
              type="submit"
              onSubmit={submitHandler}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dates;
