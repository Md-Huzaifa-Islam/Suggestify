import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import RecommendationsAddAndView from "./RecommendationsAddAndView";

const QueryDetails = () => {
  const { id } = useParams();
  //data came for this product
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/query/${id}`)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [id]);

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
          <strong>Posted On:</strong> Dec 21, 2024
        </p>
      </div>

      {data && <RecommendationsAddAndView id={_id} data={data} />}
    </div>
  );
};

export default QueryDetails;
