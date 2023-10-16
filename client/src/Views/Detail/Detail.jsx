import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../../redux/actions";
import styles from "./Detail.module.css";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/NavBar/Nav";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";

const Detail = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  const [detail, setDetail] = useState({});

  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);
  useEffect(() => {
    dispatch(getDoctor(id));
    setDetail(doctor);
  }, []);
  console.log(detail);

  return (
    <>
      <Nav />
      <div
        className={styles.nuevo}
        style={{ background: darkMode ? "#00519C" : "" }}>
        <div
          className={styles.container}
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "grey" : "",
          }}>
          <h1>Dr. {`${detail.name}`}</h1>
          <img
            src={
              detail.photo
                ? detail.photo.secure_url
                : "https://fakeimg.pl/208x208/fa0848/909090?text=ERROR"
            }
          />
          <div>
            <h2>
              <strong>{t("DETAIL.HEADERS.SPECIALTY")}</strong>
              <br></br>
              {detail.specialty}
            </h2>
          </div>
          <div>
            <h2>
              <strong>{t("DETAIL.HEADERS.REVIEWS")}</strong>
            </h2>
          </div>
          <div>
            <h2>
              <strong>{t("DETAIL.HEADERS.DESCRIPTION")}</strong>
              <br></br>
              {detail.description}
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Detail;
