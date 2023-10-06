import axios from "axios";
import Nav from "../../Components/NavBar/Nav";
import styles from "./Plan.module.css";
import Footer from "../../Components/Footer/Footer";

const Plan = () => {
  const products = [
    {
      image:
        "https://www.newmedicaleconomics.es/wp-content/uploads/2022/07/medicine-doctor-hand-working-with-modern-computer-interface-1-scaled.jpg",
      title: "Premium",
      price: 200,
      description: "Includes all specialties, virtual appointments and more!",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.contains}>
        <Nav />

        <h1
          className="text-center"
          style={{ fontSize: "3.0rem", fontFamily: "Rubik, sans-serif" }}
        >
          The best option for your Health!
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {products.map((product, index) => (
            <div key={index}>
              <h3 style={{ fontSize: "1.5rem", color: "blue" }}>
                {product.title}
              </h3>
              <p style={{ fontSize: "1rem" }}>{product.description}</p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                {product.price} $
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
                }}
                onMouseOver={(event) => {
                  event.target.style.backgroundColor = "darkgreen";
                }}
                onMouseLeave={(event) => {
                  event.target.style.backgroundColor = "green";
                }}
              >
                Buy
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
