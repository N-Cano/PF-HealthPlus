import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../../redux/actions";
import Card from "../Card/Card";
import { useState } from "react"
import Paginado from "../../Paginado/paginado";
const Cards = () => {
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.doctors);

    useEffect(() => {
        dispatch(getDoctors());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1); //currentpage almacena la pagina actual y el Set la actualiza

  const itemsPerPage = 5; //cant de elem por pag
  const totalItems = doctors.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage); //calcula el total de elementos
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); //esta func se encarga de pasar de pag
  };
  const startIndex = (currentPage - 1) * itemsPerPage; //calcula los indices de inicio 
  const endIndex = startIndex + itemsPerPage; //y fin
  const currentGame = doctors.slice(startIndex, endIndex);

    return (
        <div>
            <div >
                {currentGame.map((doc) => (
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
            <Paginado
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        </div>
    )
}
export default Cards