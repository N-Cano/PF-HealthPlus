import Card from "../Card/Card";
import axios from "axios";
import { useEffect, useState } from "react"; // Importa useEffect y useState para gestionar el estado y los efectos secundarios
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  return (
    <div>
      <div >
        {doctors.map((doc) => (
          <Card
            name={doc.name}
            specialty={doc.specialty}
            price={doc.price}
            key={doc.id}
            image={doc.image}
            description={doc.description}
            id={doc.id}
          />
        ))}
      </div>
    </div>
  )
}
export default Cards