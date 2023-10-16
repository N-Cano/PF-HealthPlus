import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../../redux/actions";
import Card from "../Card/Card";
import Paginado from "../../Paginado/paginado";
import { useTheme } from "../../../contextAPI/ThemeContext";

const Cards = () => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = doctors.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoctors = doctors.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col max-w-screen-xl mx-auto mb-2">
      {/* {console.log("total doctors", doctors)} */}
      <div
        className="flex bg-blue-900 justify-center item rounded-2xl gap-6 h-70 mb-5 flex-wrap"
        style={{
          backgroundColor: darkMode ? "#325372" : "",
        }}>
        <div className="flex flex-col max-w-screen-xl mx-auto mb-0">
          <div className="flex justify-center bg-blue-900 item rounded-2xl gap-6 h-70 mb-5 flex-wrap">
            {currentDoctors.map((doc) => (
              <Card
                key={doc.id}
                name={doc.name}
                specialty={doc.specialty}
                price={doc.price}
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
      </div>
    </div>
  );
};

export default Cards;
