import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../../redux/actions";
import styles from "./Detail.module.css";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
const Detail2 = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);
  useEffect(() => {
    dispatch(getDoctor(id));
    setDetail(doctor);
  }, []);
  console.log(detail);

  const deleteDoc = async () => {
    await axios.delete(`http://localhost:3001/doctors/${id}`);
  };

  return (
    <>
      <div className={styles.nuevo}>
        <div className={styles.container}>
          <h1>{`${detail.name}`}</h1>
          <img
            src={
              detail.photo
                ? detail.photo.secure_url
                : "https://fakeimg.pl/208x208/fa0848/909090?text=ERROR"
            }
          />
          <div>
            <h2>specialty:{detail.specialty}</h2>
          </div>
          <div>
            <h2>price: {detail.price}</h2>
          </div>
          <div>
            <h2>description:{detail.description}</h2>
          </div>
          <div className={styles.inputbox}>
            <Link to="/dashboard">
              <button>Home</button>
            </Link>
          </div>
        </div>
        <Link to="/dashboard">
          <button onClick={deleteDoc}>Delete Doc</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default Detail2;
