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
    query_tItle,
    recommendationCount,
    _id,
  } = data;

  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* Query Information */}
      <div className="mb-6 rounded-md border p-4 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">Query Details</h1>
        <p>
          <strong>Query Title:</strong> {query_tItle}
        </p>
        <p>
          <strong>Product Name:</strong>
          {product_name}
        </p>
        <p>
          <strong>User:</strong> {owner?.email}
        </p>
        <p>
          <strong>Posted On:</strong> {format(created, "dd//MM/yyy")}
        </p>
      </div>

      <RecommendationsAddAndView id={_id} data={data} />
    </div>
  );
};

export default QueryDetails;
