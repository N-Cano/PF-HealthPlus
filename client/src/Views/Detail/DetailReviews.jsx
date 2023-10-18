import { Footer } from "../../Components";
import { useTheme } from "../../contextAPI/ThemeContext";
import Nav from "../../Components/NavBar/Nav";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctor } from "../../redux/actions";

const DetailReviews = () => {
  const { darkMode } = useTheme();
  const { t } = useTranslation();

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detailReview, setDetailReview] = useState({});
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
    setDetailReview(doctor);
  }, [doctor]);

  return (
    <>
      <div className="h-screen">
        {console.log("detailReview:", detailReview)}

        <div
          className={
            darkMode
              ? "#1E3453"
              : "h-full bg-gradient-to-br from-blue-300 to-gray-100 shadow-lg"
          }
        >
          <Nav />
          {loading ? (
            <p>{t("DETAIL.HEADERS.LOADING")}</p>
          ) : (
            <>
              <h1
                style={{
                  fontFamily: "Rubik, sans-serif",
                  color: darkMode ? "black" : "",
                }}
                className="text-center text-5xl font-semibold pt-6"
              >
                {detailReview.name}
              </h1>

              <p className="mt-7 text-center">{t("DETAILREVIEW.MSG")}</p>
              <div className="max-w-[1200] py-[30px] grid lg:grid-cols-5 sm:grid-cols-5 gap-6 text-black mx-4">
                {detailReview.comments
                  ? detailReview.comments.slice(0, 25).map((comment, index) => (
                      <div
                        key={index}
                        className="shadow-lg p-4 text-center hover:scale-110 transition duration-300 ease-in-out"
                        style={{
                          background: darkMode ? "#00519C" : "",
                          color: darkMode ? "white" : "",
                        }}
                      >
                        <h2 className="text-xl py-2">{comment.userName}</h2>
                        <p>{comment.comment}</p>
                        <span>{comment.date}</span>
                      </div>
                    ))
                  : null}
              </div>

              <div className="flex justify-center items-center ">
                <Link to="/home">
                  <button
                    className="bg-black text-white h-10 w-20 rounded-lg hover:bg-white hover:text-black hover:scale-110 transition duration-300 ease-in-out"
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
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailReviews;
