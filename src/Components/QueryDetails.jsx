const QueryDetails = () => {
  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* Query Information */}
      <div className="mb-6 rounded-md border p-4 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">Query Details</h1>
        <p>
          <strong>Query Title:</strong> Is there any better alternative for
          Product X?
        </p>
        <p>
          <strong>Product Name:</strong> Product X
        </p>
        <p>
          <strong>User:</strong> John Doe (john.doe@example.com)
        </p>
        <p>
          <strong>Posted On:</strong> Dec 21, 2024
        </p>
      </div>

      {/* Add Recommendation Form */}
      <div className="mb-6 rounded-md border p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Add a Recommendation</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="recommendationTitle"
              className="mb-1 block font-medium"
            >
              Recommendation Title
            </label>
            <input
              type="text"
              id="recommendationTitle"
              className="w-full rounded-md border p-2"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productName" className="mb-1 block font-medium">
              Recommended Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="w-full rounded-md border p-2"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productImage" className="mb-1 block font-medium">
              Recommended Product Image URL
            </label>
            <input
              type="url"
              id="productImage"
              className="w-full rounded-md border p-2"
              placeholder="Enter image URL"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="recommendationReason"
              className="mb-1 block font-medium"
            >
              Recommendation Reason
            </label>
            <textarea
              id="recommendationReason"
              className="w-full rounded-md border p-2"
              placeholder="Why do you recommend this?"
              rows="3"
            ></textarea>
          </div>
          <button
            type="button"
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Add Recommendation
          </button>
        </form>
      </div>

      {/* All Recommendations */}
      <div className="rounded-md border p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">All Recommendations</h2>
        <div className="space-y-4">
          {/* Recommendation Item */}
          <div className="rounded-md border p-4 shadow-sm">
            <p>
              <strong>Recommender:</strong> Jane Smith (jane.smith@example.com)
            </p>
            <p>
              <strong>Recommended Product:</strong> Product Y
            </p>
            <p>
              <strong>Reason:</strong> It has better features and is more
              affordable.
            </p>
            <img
              src="https://via.placeholder.com/150"
              alt="Product Y"
              className="mt-2 rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">
              Recommended on: Dec 20, 2024
            </p>
          </div>

          {/* Another Recommendation Item */}
          <div className="rounded-md border p-4 shadow-sm">
            <p>
              <strong>Recommender:</strong> Alex Johnson
              (alex.johnson@example.com)
            </p>
            <p>
              <strong>Recommended Product:</strong> Product Z
            </p>
            <p>
              <strong>Reason:</strong> Excellent reviews and superior customer
              service.
            </p>
            <img
              src="https://via.placeholder.com/150"
              alt="Product Z"
              className="mt-2 rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">
              Recommended on: Dec 19, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
