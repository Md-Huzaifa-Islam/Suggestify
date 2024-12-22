const RecommendationForMeContainer = () => {
  // Placeholder data
  const recommendationsForMe = [
    {
      id: 1,
      queryTitle: "Is there any better alternative for Product X?",
      recommenderName: "John Doe",
      recommendedProduct: "Product Y",
      reason: "Better features and affordable.",
      createdAt: "Dec 20, 2024",
    },
    {
      id: 2,
      queryTitle: "What is the best sports shoe for running?",
      recommenderName: "Jane Smith",
      recommendedProduct: "Running Shoe Z",
      reason: "Durable and lightweight.",
      createdAt: "Dec 19, 2024",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Recommendations For Me</h1>
      <table className="w-full border-collapse border border-gray-200 shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Query Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Recommender Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Recommended Product
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Reason
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {recommendationsForMe.map((recommendation, index) => (
            <tr
              key={recommendation.id}
              className="transition-colors hover:bg-gray-50"
            >
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                {recommendation.queryTitle}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {recommendation.recommenderName}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendationForMeContainer;
