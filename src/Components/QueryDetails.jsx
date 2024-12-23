import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import RecommendationsAddAndView from "./RecommendationsAddAndView";
import { format } from "date-fns";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const QueryDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  //data came for this product
  const [data, setData] = useState(null);
  useEffect(() => {
    axiosSecure
      .get(`/query/${id}`)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [id, axiosSecure]);

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
  } = data || {};

  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* Query Information */}
      {data && (
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
      )}

      {data && <RecommendationsAddAndView id={_id} data={data} />}
    </div>
  );
};

export default QueryDetails;
