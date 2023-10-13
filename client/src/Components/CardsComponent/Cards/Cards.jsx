import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../../redux/actions";
import Card from "../Card/Card";
import { useState } from "react";
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
  const currentDoctors = doctors.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col max-w-screen-xl mx-auto mb-0">
      {/* {console.log("total doctors", doctors)} */}
      <div className=" flex justify-center bg-blue-900 item rounded-2xl gap-6 h-70 mb-5 flex-wrap">
        {currentDoctors.map((doc) => (
          <Card
            name={doc.name}
            specialty={doc.specialty}
            price={doc.price}
            key={doc.id}
            photo={doc.photo.secure_url}
            description={doc.description}
            id={doc.id}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Paginado
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          totalCards={totalItems}
        />
      </div>
    </div>
  );
};
export default Cards;
