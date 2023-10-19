import Nav from "../../Components/NavBar/Nav";
import { useEffect } from "react";
import CardsDates from "../../Components/CardsDates/CardsDates";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { dateById } from "../../redux/actions";
import Footer from "../../Components/Footer/Footer";
import { useTheme } from "../../contextAPI/ThemeContext";

const MyDates = () => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();
  const date = useSelector((state) => state.dateById);
  console.log("date", date);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function(user) {
      if (user) {
        const id = user.uid;
        dispatch(dateById(id));
        console.log(date);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <div className="flex flex-col justify-between">
      <div
        className="h-full flex flex-col just mb-40"
        style={{ background: darkMode ? "#00519C" : "" }}
      >
        <Nav />
        <CardsDates dates={date} />
      </div>
      <Footer />
    </div>
  );
};

export default MyDates;
