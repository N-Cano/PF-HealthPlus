import Nav from "../../Components/NavBar/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import CardsDates from "../../Components/CardsDates/CardsDates";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { dateById } from "../../redux/actions";

const MyDates = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.dateById);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        const id = user.uid;
        dispatch(dateById(id));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <div>
      <Nav />
      <CardsDates dates={date} />
    </div>
  );
};

export default MyDates;
