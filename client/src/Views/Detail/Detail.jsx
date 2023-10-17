import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../../redux/actions";
import styles from "./Detail.module.css";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/NavBar/Nav";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";
import { Link } from "react-router-dom";

const Detail = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDoctor(id));
      setLoading(false);
    };

    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    setDetail(doctor);
  }, [doctor]);

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
          {loading ? (
            <p>{t("DETAIL.HEADERS.LOADING")}</p>
          ) : (
            <>
              <h1>
                <strong>Dr. {detail.name}</strong>
              </h1>
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
                  {detail.comments && detail.comments.length > 1 ? (
                    <div>
                      <span>
                        <strong>1. </strong>
                        {detail.comments[0].comment}
                      </span>
                      <br />
                      <span>
                        <strong>2. </strong>
                        {detail.comments[1].comment}
                      </span>
                    </div>
                  ) : (
                    <h3>{t("DETAIL.HEADERS.NOCOMMENTS")}</h3>
                  )}
                </h2>
              </div>
              <div>
                <h2>
                  <strong>{t("DETAIL.HEADERS.DESCRIPTION")}</strong>
                  <br></br>
                  {detail.description}
                </h2>
              </div>
              <Link to="/home">
                <button
                  className="bg-black text-white h-10 w-20 rounded-2xl mt-2 mb-2"
                  type="button"
                  style={{
                    background: darkMode ? "#325372" : "",
                    color: darkMode ? "white" : "",
                  }}>
                  {t("DETAIL.HEADERS.HOME")}
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
