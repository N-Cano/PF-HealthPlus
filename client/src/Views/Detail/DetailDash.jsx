import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../../redux/actions";
import styles from "./Detail.module.css";
import Footer from "../../Components/Footer/Footer";
import NavBarDesp from "../../Components/NavBar/NavBarDesp";
import { useTheme } from "../../contextAPI/ThemeContext";
import { deleteDoctor } from "./deleteDoctor";


const Detail2 = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getDoctor(id));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    setDetail(doctor);
  }, [doctor]);

  const handleDelete = async () => {
    deleteDoctor(id);
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
          <h1>{detail.name}</h1>
          <img
            src={
              detail.photo
                ? detail.photo.secure_url
                : "https://fakeimg.pl/208x208/fa0848/909090?text=ERROR"
            }
            alt={`${detail.name}'s Photo`}
          />
          <div>
            <h2>Specialty: {detail.specialty}</h2>
          </div>
          <div>
            <h2>Description: {detail.description}</h2>
          </div>
          <div className={styles.inputbox}>
            <Link to="/dashboard">
              <button className="bg-blue-500 text-white h-10 w-20 rounded-2xl mt-2 mb-2">
                Home
              </button>
            </Link>
          </div>
          <Link to="/dashboard">
            <button
              className="bg-black text-white h-10 w-20 rounded-2xl mt-2   mb-2"
              onClick={handleDelete}
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

export default Detail2;

