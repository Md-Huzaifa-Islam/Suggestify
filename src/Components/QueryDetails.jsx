import { useParams } from "react-router-dom";
import RecommendationsAddAndView from "./RecommendationsAddAndView";
import { format } from "date-fns";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const QueryDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  //data came for this product
  const getQueryDetails = async () => {
    const { data } = await axiosSecure.get(`/query/${id}`);
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["queryDetails", id],
    queryFn: getQueryDetails,
  });
  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
        <button>refresh</button>
      </div>
    );

  const {
    boycotting_reason_details,
    created,
    owner,
    product_brand,
    product_image_url,
    product_name,
    lastUpdatedTime,
    query_tItle,
    _id,
  } = data || {};

  return (
    <div className="mx-auto max-w-4xl text-white">
      {/* Query Information */}
      {data && (
        <div className="mx-auto max-w-4xl space-y-8 rounded-lg bg-cardBg p-6 py-16 shadow-lg shadow-white">
          <div className="flex items-center space-x-4">
            <img
              className="h-16 w-16 rounded-full border border-gray-300"
              src={owner?.photo}
              alt={owner?.name}
            />
            <div>
              <div className="flex items-center gap-2">
                <p className="text-xl font-semibold">Md Huzaifa Islam</p>
                <span>posted this query</span>
              </div>
              <p className="opacity-70">
                {created === lastUpdatedTime
                  ? "Created: " + format(created, "dd//MM/yyy")
                  : "Last Updated: " + format(lastUpdatedTime, "dd//MM/yyy")}
              </p>
            </div>
          </div>
          <h1 className="text-center text-3xl font-bold">{query_tItle}</h1>

          <div className="flex flex-col items-center">
            <img
              className="size-60 rounded-md object-cover object-center shadow-md shadow-primaryBtn"
              src={product_image_url}
              alt={product_name}
            />
            <h2 className="mt-4 text-2xl font-bold">{product_name}</h2>
            <p className="text-sm opacity-90">Brand: {product_brand}</p>
          </div>

          <div className="space-y-4 rounded-lg bg-mainBg p-6 py-8">
            <h3 className="text-xl font-semibold">Boycotting Reason</h3>
            <p className="italic opacity-90">{boycotting_reason_details}</p>
          </div>
        </div>
      )}
      {data && <RecommendationsAddAndView id={_id} dataP={data} />}
    </div>
  );
};

export default QueryDetails;
