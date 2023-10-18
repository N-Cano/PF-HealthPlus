import { Footer } from "../../Components";
import { useTheme } from "../../contextAPI/ThemeContext";
import { useDetail } from "../../contextAPI/DetailContext";
import Nav from "../../Components/NavBar/Nav";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DetailReviews = () => {
  const { darkMode } = useTheme();
  const { detail } = useDetail();
  const { t } = useTranslation();

  return (
    <>
      <div className="h-screen">
        <div
          className={
            darkMode
              ? "#1E3453"
              : "h-full bg-gradient-to-br from-blue-300 to-gray-100 shadow-lg"
          }
        >
          <Nav />

          <h1
            style={{ fontFamily: "Rubik, sans-serif" }}
            className="text-center text-5xl font-semibold pt-6"
          >
            {detail.name}
          </h1>

          <p className="mt-7 text-center">These are some of the reviews:</p>
          {detail.comments
            ? detail.comments.map((comment, index) => (
                <div
                  key={index}
                  className="ml-8 max-w-[1200] mx-auto py-[30px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6 text-black grid-flow-col-dense"
                >
                  <div className="shadow-lg p-4 text-center">
                    <h3 className="text-xl py-2">{comment.userName}</h3>
                    <p>{comment.comment}</p>
                    <span>{comment.date}</span>
                  </div>
                </div>
              ))
            : null}
          <div className="flex justify-center items-center">
            <Link to="/home">
              <button
                className="bg-black text-white h-10 w-20 rounded-lg hover:bg-white hover:text-black"
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailReviews;
