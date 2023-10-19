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
import { useDetail } from "../../contextAPI/DetailContext";
import { LiaStarSolid } from "react-icons/lia";
import { LiaUserSolid } from "react-icons/lia";
import { LiaCalendarWeekSolid } from "react-icons/lia";

const Detail = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  const { setDetailData } = useDetail();

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

  useEffect(() => {
    setDetailData(doctor); // context api
  }, [doctor]);

  return (
    <div className="h-screen">
      <Nav />
      <div
        className={styles.nuevo}
        style={{ background: darkMode ? "#00519C" : "" }}
      >
        <div
          className={styles.container}
          style={{
            background: darkMode ? "black" : "#79b7ef",
            color: darkMode ? "white" : "",
          }}
        >
          {loading ? (
            <p>{t("DETAIL.HEADERS.LOADING")}</p>
          ) : (
            <>
              <h1 style={{ fontFamily: "Open Sans, sans-serif" }}>
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
                <h2 style={{ fontFamily: "Open Sans, sans-serif" }}>
                  <strong>{t("DETAIL.HEADERS.SPECIALTY")}</strong>
                  <br></br>
                  {detail.specialty}
                </h2>
              </div>
              <div>
                <h2 style={{ fontFamily: "Open Sans, sans-serif" }}>
                  <strong>{t("DETAIL.HEADERS.RATING")}</strong>
                  <br></br>
                  {detail.rating}
                </h2>
              </div>
              <div>
                <h2 style={{ fontFamily: "Open Sans, sans-serif" }}>
                  <strong>{t("DETAIL.HEADERS.REVIEWS")}</strong>{" "}
                </h2>
              </div>

              {detail.comments && detail.comments.length > 1 ? (
                <div className="flex flex-wrap">
                  <div className="flex-grow">
                    <div
                      className="p-5 text-center bg-blue-200 rounded-lg w-auto"
                      style={{ background: darkMode ? "#325372" : "" }}
                    >
                      <span
                        style={{
                          fontFamily: "Open Sans, sans-serif",
                          marginBottom: "4px",
                        }}
                      >
                        {detail.comments[0].comment.length < 500 ? (
                          detail.comments[0].comment
                        ) : (
                          <Link to={`/detailReviews/${detail.id}`}>
                            <button
                              className="bg-black text-white mt-4 hover:bg-white hover:text-black rounded-lg w-[120px] h-[40px]"
                              style={{
                                background: darkMode ? "#325372" : "",
                                color: darkMode ? "white" : "",
                              }}
                            >
                              {t("DETAIL.HEADERS.MORE REVIEWS")}
                            </button>
                          </Link>
                        )}
                      </span>
                      <div className="flex justify-center flex-wrap mt-2">
                        <div className="flex gap-1">
                          <p
                            className="bg-white hover:bg-blue-400 hover:text-white border border-gray-300 p-2 w-1/3 h-auto text-[13px] flex items-center  rounded-lg flex-col justify-between hover:scale-110 transition duration-300 ease-in-out"
                            style={{
                              fontFamily: "Open Sans, sans-serif",
                              background: darkMode ? "#00519C" : "",
                            }}
                          >
                            <div className="bg-yellow-100 border rounded-full inline-block p-2 border-slate-800">
                              <LiaCalendarWeekSolid className="text-blue-900" />
                            </div>
                            <div
                              style={{
                                fontFamily: "Open Sans, sans-serif",
                                background: darkMode ? "#00519C" : "",
                                fontSize: "12px",
                              }}
                            >
                              {detail.comments[0].date}
                            </div>
                          </p>

                          <p
                            className="bg-white hover:bg-blue-400 hover:text-white border border-gray-300 p-2 w-1/3 h-auto text-[13px] flex items-center justify-between rounded-lg flex-col hover:scale-110 transition duration-300 ease-in-out"
                            style={{
                              fontFamily: "Open Sans, sans-serif",
                              background: darkMode ? "#00519C" : "",
                            }}
                          >
                            <div className="bg-yellow-100 border rounded-full inline-block p-2 border-slate-800">
                              <LiaUserSolid className="text-blue-900" />
                            </div>
                            <div
                              style={{
                                fontFamily: "Open Sans, sans-serif",
                                background: darkMode ? "#00519C" : "",
                                fontSize: "12px",
                              }}
                            >
                              {detail.comments[0].userName}
                            </div>
                          </p>
                          <p
                            className="bg-white hover:bg-blue-400 hover:text-white border border-gray-300 p-2 w-1/3 h-auto text-[13px] flex items-center justify-between rounded-lg flex-col hover:scale-110 transition duration-300 ease-in-out"
                            style={{
                              fontFamily: "Open Sans, sans-serif",
                              background: darkMode ? "#00519C" : "",
                            }}
                          >
                            <div className="bg-yellow-100 border rounded-full inline-block p-2 border-slate-800">
                              <LiaStarSolid className="text-blue-900" />
                            </div>
                            <div
                              style={{
                                fontFamily: "Open Sans, sans-serif",
                                background: darkMode ? "#00519C" : "",
                                fontSize: "12px",
                              }}
                            >
                              {detail.comments[0].punctuation}
                            </div>
                          </p>
                        </div>
                      </div>
                      <Link to={`/detailReviews/${detail.id}`}>
                        <button
                          className="bg-black text-white mt-4 hover:bg-white hover:text-black rounded-lg w-[120px] h-[40px] hover:scale-110 transition duration-300 ease-in-out"
                          style={{
                            background: darkMode ? "black" : "",
                            color: darkMode ? "white" : "",
                          }}
                        >
                          {t("DETAIL.HEADERS.MORE REVIEWS")}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <p style={{ fontFamily: "Open Sans, sans-serif" }}>
                  {t("DETAIL.HEADERS.NOCOMMENTS")}
                </p>
              )}
              <div className="mt-2">
                <h2 style={{ fontFamily: "Open Sans, sans-serif" }}>
                  <strong>{t("DETAIL.HEADERS.DESCRIPTION")}</strong>
                  <br></br>
                  {detail.description}
                </h2>
              </div>
            </>
          )}
        </div>

        {loading ? (
          ""
        ) : (
          <div className="flex justify-center items-center mt-1 mb-28">
            <Link to="/home">
              <button
                className="bg-black text-white h-10 w-20 rounded-lg hover:bg-white hover:text-black  hover:scale-110 transition duration-300 ease-in-out"
                type="button"
                style={{
                  background: darkMode ? "#325372" : "",
                  color: darkMode ? "white" : "",
                }}
              >
                {t("DETAIL.HEADERS.HOME")}
              </button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
