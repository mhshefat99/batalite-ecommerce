// Pagination component ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function Pagination({
  activePage,
  totalPages,
  handlePrevious,
  handleNext,
  handlePageNumClick,
}) {
  // IF there's not more than 1 page then don't show buttons
  if (totalPages === 1) return null;

  // IF there's more than 1 pages
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {/* Previous Button------ */}
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
        onClick={handlePrevious}
        disabled={activePage === 1}
      >
        Previous
      </button>
      {/* Page Number Buttons----- */}
      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
        (pageNum, pageIdx) => (
          <button
            key={pageIdx}
            className={`px-4 py-2 rounded-md ${
              activePage === pageNum ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handlePageNumClick(pageNum)}
          >
            {pageNum}
          </button>
        )
      )}
      {/* Next Button----- */}
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
        onClick={handleNext}
        disabled={activePage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

/////////////////////////////////////////////////////////////////////////////////////////
