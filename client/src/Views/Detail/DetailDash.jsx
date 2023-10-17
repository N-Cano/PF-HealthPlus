import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../../redux/actions";
import styles from "./Detail.module.css";
import Footer from "../../Components/Footer/Footer";
import NavBarDesp from "../../Components/NavBar/NavBarDesp";
import { deleteDoctor } from "./deleteDoctor";

const Detail2 = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);

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

      <div className={styles.nuevo}>
        <div className={styles.container}>
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
              <button class="bg-blue-500 text-white h-10 w-20 rounded-2xl mt-2 mb-2">
                Home
              </button>
            </Link>
          </div>
          <Link to="/dashboard">
            <button
              class="bg-black text-white h-10 w-20 rounded-2xl mt-2   mb-2"
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

