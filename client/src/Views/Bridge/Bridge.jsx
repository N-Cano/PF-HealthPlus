import { auth } from "../../firebase/firebase.config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { enableUser } from "./enableUser";

const Bridge = () => {
  const [form, setForm] = useState({
    uid: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        const uid = user.uid;
        setForm({ uid });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (form.uid) {
      enableUser(form.uid);
      navigate("/home");
    }
  }, [form.uid, navigate]);

  return (
    <div>
      <h1>Await</h1>
    </div>
  );
};

export default Bridge;

