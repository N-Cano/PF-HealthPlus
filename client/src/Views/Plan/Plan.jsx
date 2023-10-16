import axios from "axios";
import Nav from "../../Components/NavBar/Nav";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";
import styles from "./Plan.module.css";

const Plan = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();

  const products = [
    {
      image:
        "https://www.newmedicaleconomics.es/wp-content/uploads/2022/07/medicine-doctor-hand-working-with-modern-computer-interface-1-scaled.jpg",
      title: t("PLAN.PRODUCTS.PREMIUM.TITLE"),
      price: 200,
      description: t("PLAN.PRODUCTS.PREMIUM.DESCRIPTION"),
    },
  ];

  return (
    <div>
      <div
        className={styles.contains}
        style={{ background: darkMode ? "#00519C" : "" }}>
        <Nav />

        <h1
          className="text-center mt-[30px]"
          style={{ fontSize: "2.0rem", fontFamily: "Rubik, sans-serif" }}>
          {t("PLAN.DESCRIPTION 1")}
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
            textWrap: "wrap",
          }}>
          {products.map((product, index) => (
            <div key={index}>
              <h3
                className="mt-5 text-[40px]"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Rubik, sans-serif",
                }}>
                {product.title}
              </h3>
              <p style={{ fontSize: "1rem", fontFamily: "Rubik, sans-serif" }}>
                {product.description}
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "green",
                }}>
                $ {product.price}
              </p>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "500px",
                  height: "300px",
                  border: "1px solid #ccc",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  borderRadius: "1rem",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
                onMouseOver={(event) => {
                  event.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(event) => {
                  event.target.style.transform = "scale(1)";
                }}
              />
              <button
                onClick={() => {
                  axios
                    .post("http://localhost:3001/payment", product)
                    .then(
                      (res) =>
                        (window.location.href =
                          res.data.response.body.init_point)
                    );
                }}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "1rem",
                  marginTop: "10px",
                  cursor: "pointer",
                  width: "500px",
                  transition: "background-color 0.3s ease",
                  borderRadius: "1rem",
                }}
                onMouseOver={(event) => {
                  event.target.style.backgroundColor = "darkgreen";
                }}
                onMouseLeave={(event) => {
                  event.target.style.backgroundColor = "#114899";
                }}>
                {t("PLAN.BUTTON")}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plan;
