import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../redux/actions";
import Docs from "./Docs/Docs";
import { useTheme } from "../../contextAPI/ThemeContext";

const DocsCards = () => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col mb-8">
      <div className="flex flex-col justify-center rounded-2xl w-[900px]">
        {doctors.map((doc) => (
          <Docs
            name={doc.name}
            specialty={doc.specialty}
            price={doc.price}
            key={doc.id}
            photo={doc.photo}
            description={doc.description}
            id={doc.id}
          />
        ))}
      </div>
    </div>
  );
};
export default DocsCards;
