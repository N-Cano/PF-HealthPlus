import { auth } from "../../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Bridge = () => {
  const [form, setForm] = useState({
    uid: "",
  });
  console.log(form);
  const Navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        const uid = user.uid;
        setForm({ ...form, uid });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    axios
      .put(`http://localhost:3001/users/enable/${form.uid}`)
      .then(() => {
        Navigate("/login");
      })
      .catch((error) => {
        console.error("Error al cargar los datos del paciente:", error);
      });
  }, []);

  return (
    <div>
      <h1>Await</h1>
    </div>
  );
};

export default Bridge;
