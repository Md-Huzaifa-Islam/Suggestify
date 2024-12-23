import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/Contexts";

const MyRecommendationsContainer = () => {
  const { user } = useContext(AuthContext);
  // extract data from server
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/recommendations?email=${user.email}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [user]);
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recommendation?",
    );
    if (confirmDelete) {
      axios
        .delete(`http://localhost:5000/recommendations/${id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-2xl font-bold">My Recommendations</h1>
      <table className="w-full border-collapse border border-gray-200 shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">No</th>
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
          {data &&
            data.map((recommendation, index) => (
              <tr
                key={recommendation._id}
                className="transition-colors hover:bg-gray-50"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {recommendation?.main_product?.query_tItle}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {recommendation?.product_name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {recommendation?.Recommending_reason_details}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {recommendation?.created}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(recommendation?._id)}
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
