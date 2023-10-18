import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../../firebase/firebase.config";
import axios from "axios";
const Subscribe = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    uid: "",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function(user) {
      if (user) {
        const uid = user.uid;
        setForm({ uid });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const [enable, setEnable] = useState(false); // Estado local para controlar "enable"

  useEffect(() => {
    if (form.uid) {
      axios
        .get(`http://localhost:3001/users/${form.uid}`)
        .then((response) => {
          const data = response.data;
          if (data.enable) {
            setEnable(true); // Establece "enable" en true si la respuesta del servidor es verdadera
          } else {
            setEnable(false); // Establece "enable" en false si la respuesta del servidor es falsa
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [form.uid]);
  return (
    <div className="mt-3">
      <h2 className="text-[30px] text-center pt-2 mt-[80px] mb-0 font-semibold">
        {t("HOME PAGE.SUBSCRIBE.TAGLINE")}
      </h2>
      <div className="grid grid-cols-3 h-[400px]">
        <div className="flex flex-col justify-center items-center p-4">
          <FaUserDoctor className="text-4xl" />
          <h3 className="text-xl mt-4 text-left">
            {t("HOME PAGE.SUBSCRIBE.DESCRIPTION 1")}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6993/6993594.png"
            alt="Hospital Image"
            className="w-16 h-16"
          />
        </div>
        <div className="flex flex-col justify-center items-center p-4">
          <div className="text-center">
            <p className="text-base mb-4">
              {t("HOME PAGE.SUBSCRIBE.DESCRIPTION 2")}
            </p>
            <strong className="text-lg block mb-2">
              {t("HOME PAGE.SUBSCRIBE.PRICE")}
            </strong>
          </div>

          <Link to="/plan">
            {enable !== true && (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {t("HOME PAGE.SUBSCRIBE.BUTTON")}
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
