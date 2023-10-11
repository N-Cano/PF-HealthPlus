import { auth } from "../../firebase/firebase.config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Bridge = () => {
  const [form, setForm] = useState({
    uid: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        const uid = user.uid;
        setForm({ uid }); // Actualiza el estado con el UID cuando cambia el estado de autenticación.
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    // Realiza la solicitud Axios solo si form.uid tiene un valor válido.
    if (form.uid) {
      axios
        .put(`http://localhost:3001/users/enable/${form.uid}`)
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error al cargar los datos del paciente:", error);
        });
    }
  }, [form.uid, navigate]);

  return (
    <div>
      <h1>Await</h1>
    </div>
  );
};

export default Bridge;
