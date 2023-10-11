import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../redux/actions";
import Docs from "./Docs/Docs";

const DocsCards = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col mb-8">
      <div className="border-2 flex justify-center item bg-blue-100 rounded-2xl gap-6 h-50">
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
