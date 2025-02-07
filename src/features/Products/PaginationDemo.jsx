import useQueryParams from "./useQueryParams";

function Pagination({ totalPages }) {
  const { page, setQueryParams } = useQueryParams();
  console.log("page:", page);
  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
        onClick={() => setQueryParams("_page", Math.max(page - 1, 1))}
        disabled={page === 1}
      >
        Previous
      </button>

      {/* Page Number Buttons */}

      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
        (pageNum) => (
          <button
            key={pageNum}
            className={`px-4 py-2 rounded-md ${
              page === pageNum ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setQueryParams("_page", Number(pageNum))}
          >
            {pageNum}
          </button>
        )
      )}

      <button
        className="px-4 py-2 bg-gray-500 text-white rounded-md disabled:opacity-50"
        onClick={() => setQueryParams("_page", Number(page) + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
