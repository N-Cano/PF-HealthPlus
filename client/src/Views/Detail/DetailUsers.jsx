import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPatient } from "../../redux/actions";
import styles from "./Detail.module.css";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
const DeatilUsers = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patient);
  useEffect(() => {
    dispatch(getPatient(id));
    setDetail(patient);
  }, []);
  console.log(detail);

  const deleteDoc = async () => {
    await axios.delete(`http://localhost:3001/users/${id}`);
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
            <h2>lastName:{detail.lastName}</h2>
          </div>
          <div>
            <h2>DNI: {detail.userId}</h2>
          </div>
          <div>
            <h2>date:{detail.date}</h2>
          </div>
          <div className={styles.inputbox}>
            <Link to="/dashboard">
              <button>Home</button>
            </Link>
          </div>
        </div>
        <Link to="/dashboard">
          <button onClick={deleteDoc}>Delete Usuario</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default DeatilUsers;
