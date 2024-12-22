const MyRecommendationsContainer = () => {
  // Placeholder recommendations data
  const recommendations = [
    {
      id: 1,
      queryTitle: "Is there any better alternative for Product X?",
      recommendedProduct: "Product Y",
      reason: "Better features and affordable.",
      createdAt: "Dec 20, 2024",
    },
    {
      id: 2,
      queryTitle: "What is the best sports shoe for running?",
      recommendedProduct: "Running Shoe Z",
      reason: "Durable and lightweight.",
      createdAt: "Dec 19, 2024",
    },
  ];

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recommendation?",
    );
    if (confirmDelete) {
      console.log(`Deleted recommendation with ID: ${id}`);
      // Placeholder for actual delete logic
      // Call delete API here
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-2xl font-bold">My Recommendations</h1>
      <table className="w-full border-collapse border border-gray-200 shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Query Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Recommended Product
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Reason
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((recommendation, index) => (
            <tr
              key={recommendation.id}
              className="transition-colors hover:bg-gray-50"
            >
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                {recommendation.queryTitle}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {recommendation.recommendedProduct}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {recommendation.reason}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {recommendation.createdAt}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(recommendation.id)}
                  className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRecommendationsContainer;
