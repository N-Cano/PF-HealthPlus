import style from "./Paginado.module.css";

const Paginado = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalCards,
}) => {
  const showFirstButton = currentPage > 2;
  const showPrevButton = currentPage > 1;
  const showNextButton =
    currentPage < totalPages && currentPage * itemsPerPage < totalCards;

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
