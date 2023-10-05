/* eslint-disable react/prop-types */
import style from "./Paginado.module.css"; // Importa el archivo CSS con los estilos.

const Paginado = ({ currentPage, totalPages, onPageChange }) => {
  const showFirstButton = currentPage > 2; //Estas variables determinan si se deben mostrar los botones de "Primera página", "Página anterior", "Página siguiente" y "Última página", respectivamente.
  const showPrevButton = currentPage > 1;
  const showNextButton = currentPage < totalPages;
  const showLastButton = currentPage < totalPages - 1;

  return (
    <div className={style.paginateContainer}>
      <div className={style.paginate}>
        {showFirstButton && (
          <span
            title="First page"
            className={style.pageLink}
            onClick={() => onPageChange(1)}>
            <>&#8810;</>
          </span>
        )}
        {/* Aplica el estilo CSS al contenedor div */}
        {showPrevButton && (
          <span
            title="Previous page"
            className={style.pageLink}
            onClick={() => onPageChange(currentPage - 1)}
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <>&#8630;</>
          </span>
        )}
        <span className={`${style.pageLink} ${style.currentPage}`}>
          {currentPage}
        </span>
        {showNextButton && (
          <span
            title="Next page"
            className={style.pageLink}
            onClick={() => onPageChange(currentPage + 1)}
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <>&#8631;</>
          </span>
        )}
        {showLastButton && (
          <span
            title="Last page"
            className={style.pageLink}
            onClick={() => onPageChange(totalPages)}
            style={{ fontFamily: "Open Sans, sans-serif" }}>
            <>&#8811;</>
          </span>
        )}
      </div>
    </div>
  );
};

export default Paginado;
