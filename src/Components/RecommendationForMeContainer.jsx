import { format } from "date-fns";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Recommendations for me || Suggestify</title>
      </Helmet>
      {data && data.length == 0 ? (
        <div className="mx-auto max-w-6xl p-6">
          <h1 className="mb-6 text-center text-3xl font-semibold text-white md:text-4xl">
            No recommendation for you yet
          </h1>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl sm:p-6">
          <h1 className="mx-auto mb-6 max-w-3xl text-center text-3xl font-semibold text-white sm:text-3xl/loose md:mb-10 md:text-4xl/relaxed xl:mb-10">
            Recommendations For Me {"-- "}
            <span>{data && data.length}</span>
          </h1>
          <table className="w-full border-collapse border border-black shadow-sm">
            <thead>
              <tr className="bg-black text-white">
                <th className="hidden border border-white px-[1px] py-2 text-left sm:px-2 md:table-cell md:px-4">
                  No.
                </th>
                <th className="hidden border border-white px-[1px] py-2 text-left sm:table-cell sm:px-2 md:px-4">
                  Query Title
                </th>
                <th className="border border-white px-[1px] py-2 text-left sm:px-2 md:px-4">
                  Recommender Name
                </th>
                <th className="border border-white px-[1px] py-2 text-left sm:px-2 md:px-4">
                  Recommended Product
                </th>
                <th className="border border-white px-[1px] py-2 text-left sm:px-2 md:px-4">
                  Reason
                </th>
                <th className="border border-white px-[1px] py-2 text-left sm:px-2 md:px-4">
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
                    <td className="hidden border border-white px-[1px] py-2 sm:px-2 md:table-cell md:px-4">
                      {index + 1}
                    </td>
                    <td className="hidden border border-white px-[1px] py-2 sm:table-cell sm:px-2 md:px-4">
                      {recommendation?.main_product?.query_tItle}
                    </td>
                    <td className="border border-white px-[1px] py-2 sm:px-2 md:px-4">
                      {recommendation?.recommender?.name}
                    </td>
                    <td className="border border-white px-[1px] py-2 sm:px-2 md:px-4">
                      {recommendation?.product_name}
                    </td>
                    <td className="border border-white px-[1px] py-2 sm:px-2 md:px-4">
                      {recommendation?.Recommending_reason_details}
                    </td>
                    <td className="border border-white px-[1px] py-2 sm:px-2 md:px-4">
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
