import Card from "../Card/Card";
import axios from "axios";
import { useEffect, useState } from "react"; // Importa useEffect y useState para gestionar el estado y los efectos secundarios

const Cards = () => {
  const [doctors, setDoctors] = useState([]); // Usa useState para almacenar la lista de doctores

  useEffect(() => {
    // Utiliza useEffect para realizar la solicitud axios una vez que el componente se haya montado
    axios.get("http://localhost:3001/doctors")
      .then((response) => {
        setDoctors(response.data); // Almacena los datos de los doctores en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los datos de los doctores:", error);
      });
  }, []); // Pasa un array vacío como segundo argumento para asegurarte de que esto solo se ejecute una vez

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