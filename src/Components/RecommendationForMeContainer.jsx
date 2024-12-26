import { format } from "date-fns";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const RecommendationForMeContainer = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // extract data from server
  const getRecommendationsForMe = async () => {
    const { data } = await axiosSecure.get(
      `/recommendations?email=${user.email}&owner=true`,
    );

    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["recommendationsForMe"],
    queryFn: getRecommendationsForMe,
  });
  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
        <button>refresh</button>
      </div>
    );

  return (
    <>
      {data && data.length == 0 ? (
        <div className="mx-auto max-w-6xl p-6">
          <h1 className="mb-6 text-center text-4xl font-semibold text-white">
            No recommendation for you yet
          </h1>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl p-6">
          <h1 className="mb-6 text-center text-4xl font-semibold text-white">
            Recommendations For Me {"-- "}
            <span>{data && data.length}</span>
          </h1>
          <table className="w-full border-collapse border border-black shadow-sm">
            <thead>
              <tr className="bg-black text-white">
                <th className="border border-white px-4 py-2 text-left">No.</th>
                <th className="border border-white px-4 py-2 text-left">
                  Query Title
                </th>
                <th className="border border-white px-4 py-2 text-left">
                  Recommender Name
                </th>
                <th className="border border-white px-4 py-2 text-left">
                  Recommended Product
                </th>
                <th className="border border-white px-4 py-2 text-left">
                  Reason
                </th>
                <th className="border border-white px-4 py-2 text-left">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="text-white opacity-85 hover:opacity-100">
              {data &&
                data.map((recommendation, index) => (
                  <tr
                    key={recommendation._id}
                    className="transition-colors hover:bg-primaryBtn"
                  >
                    <td className="border border-white px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-white px-4 py-2">
                      {recommendation?.main_product?.query_tItle}
                    </td>
                    <td className="border border-white px-4 py-2">
                      {recommendation?.recommender?.name}
                    </td>
                    <td className="border border-white px-4 py-2">
                      {recommendation?.product_name}
                    </td>
                    <td className="border border-white px-4 py-2">
                      {recommendation?.Recommending_reason_details}
                    </td>
                    <td className="border border-white px-4 py-2">
                      {format(recommendation?.created, "dd//MM/yyy")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default RecommendationForMeContainer;
