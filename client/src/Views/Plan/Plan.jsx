
import React from "react";
import Nav from "../../Components/NavBar/Nav";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";
import styles from "./Plan.module.css";
import { makePaymentRequest } from "./paymentService";

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

  const handlePayment = (product) => {
    makePaymentRequest(product).then((initPoint) => {
      if (initPoint) {
        window.location.href = initPoint;
      }
    });
  };

  return (
    <div>
      <div
        className={styles.contains}
        style={{ background: darkMode ? "#00519C" : "" }}>
        <Nav />

        <h1 className="text-center mt-[30px] text-4xl">
          {t("PLAN.DESCRIPTION 1")}
        </h1>

        <div className="flex flex-col justify-evenly items-center text-center whitespace-normal">
          {products.map((product, index) => (
            <div key={index}>
              <h3 className="mt-5 text-[40px] font-bold">
                {product.title}
              </h3>
              <p>{product.description}</p>
              <p className="text-xl font-bold text-green-600">
                $ {product.price}
              </p>
              <img
                src={product.image}
                alt={product.title}
                className="w-[500px] h-[300px] transition duration-300 ease-in-out cursor-pointer hover:scale-110 rounded-2xl justify-center my-8"
              />
              <button
                onClick={() => handlePayment(product)}
                className="p-2 bg-green-600 hover:bg-green-700 rounded-2xl text-white font-bold transition duration-300 ease-in-out cursor-pointer w-[500px]"
              >
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
