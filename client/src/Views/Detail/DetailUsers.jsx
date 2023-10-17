import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPatient } from "../../redux/actions"; // Asegúrate de que getPatient esté definida
import styles from "./Detail.module.css";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import NavBarDesp from "../../Components/NavBar/NavBarDesp";
import { useTheme } from "../../contextAPI/ThemeContext";

const DetailUsers = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patient);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getPatient(id)); // Asegúrate de que getPatient esté definida
      setLoading(false);
    };

    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    setDetail(patient);
  }, [patient]);

  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      // Puedes agregar una redirección o un mensaje de confirmación aquí
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <NavBarDesp />
      <div
        className={styles.nuevo}
        style={{ background: darkMode ? "black" : "" }}
      >
        <div
          className={styles.container}
          style={{ background: darkMode ? "#00519C" : "" }}
        >
          <h1>{`${detail.name}`}</h1>
          <img
            src={
              detail.photo
                ? detail.photo.secure_url
                : "https://fakeimg.pl/208x208/fa0848/909090?text=ERROR"
            }
            alt={`${detail.name}'s Photo`}
          />
          <div>
            <h2>Last Name: {detail.lastName}</h2>
          </div>
          <div>
            <h2>DNI: {detail.userId}</h2>
          </div>
          <div>
            <h2>Date: {detail.date}</h2>
          </div>
          <div className={styles.inputbox}>
            <Link to="/dashboardusers">
              <button className="bg-blue-500 text-white h-10 w-20 rounded-2xl mt-2 mb-2">
                Home
              </button>
            </Link>
          </div>
          <Link to="/dashboardusers">
            <button
              className="bg-black text-white h-10 w-20 rounded-2xl mt-2   mb-2"
              onClick={deleteUser}
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailUsers;
