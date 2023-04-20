
export const PageNav = ({totalPage, currentPage, page, setPage}) => {
    

    const nextPage = () => {
      setPage(page + 1);
    };

    const previousPage = () => {
      setPage(page - 1);
    };
  return (
    <div className="page-info">
      {page === 1 ? (
        <button disabled={true}>No Previous</button>
      ) : (
        <button onClick={previousPage}>Previous</button>
      )}
      <p>
        {currentPage} / {totalPage}
      </p>
      {page === 37870 ? (
        <button disabled={true}>No Next</button>
      ) : (
        <button onClick={nextPage}>Next</button>
      )}
    </div>
  );
};
