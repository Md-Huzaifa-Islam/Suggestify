import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/Contexts";
import { format } from "date-fns";

const RecommendationForMeContainer = () => {
  const { user } = useContext(AuthContext);
  // extract data from server
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/recommendations?email=${user.email}&owner=true`,
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  console.log(data);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Recommendations For Me</h1>
      <table className="w-full border-collapse border border-gray-200 shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">No.</th>
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
                  {recommendation?.recommender?.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {recommendation?.product_name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {recommendation?.Recommending_reason_details}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {format(recommendation?.created, "dd//MM/yyy")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendationForMeContainer;
