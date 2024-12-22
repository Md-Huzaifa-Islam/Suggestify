import { useNavigate } from "react-router-dom";

const MyQueries = () => {
  const navigate = useNavigate();

  // Static data for queries (replace with dynamic data in the future)
  const queries = [
    {
      id: 1,
      queryTitle: "Is this the best camera for beginners?",
      productName: "Camera X",
      productBrand: "Brand Y",
      boycottReason: "High price for features.",
      createdBy: "John Doe",
      createdAt: "2024-12-20",
    },
    {
      id: 2,
      queryTitle: "Why is the product price so high?",
      productName: "Smartphone Z",
      productBrand: "Brand A",
      boycottReason: "Excessive pricing for outdated specs.",
      createdBy: "Jane Doe",
      createdAt: "2024-12-18",
    },
  ];

  const handleDelete = (id) => {
    // Simulate deletion
    const confirmed = window.confirm(
      "Are you sure you want to delete this query?",
    );
    if (confirmed) {
      alert(`Query with ID ${id} deleted.`);
      // Add actual deletion logic here (update state or call API)
    }
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      {/* Add Query Banner */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-800">My Queries</h1>
        <button
          className="rounded-md bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600"
          onClick={() => navigate("/addquery")}
        >
          Add Query
        </button>
      </div>

      {/* My Queries Section */}
      {queries.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>No queries found. Click the button above to add your query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {queries.map((query) => (
            <div
              key={query.id}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {query.queryTitle}
              </h3>
              <p className="mt-2 text-gray-600">
                <strong>Product:</strong> {query.productName}
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Brand:</strong> {query.productBrand}
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Boycotting Reason:</strong> {query.boycottReason}
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Created By:</strong> {query.createdBy}
              </p>
              <p className="mt-2 text-gray-600">
                <strong>Created At:</strong> {query.createdAt}
              </p>

              {/* Query Actions */}
              <div className="mt-4 flex space-x-3">
                <button
                  className="rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
                  onClick={() => navigate(`/query-details/${query.id}`)}
                >
                  View Details
                </button>
                <button
                  className="rounded-md bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600"
                  onClick={() => navigate(`/update-query/${query.id}`)}
                >
                  Update
                </button>
                <button
                  className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                  onClick={() => handleDelete(query.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQueries;
