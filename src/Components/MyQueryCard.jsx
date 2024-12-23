import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const MyQueryCard = ({ data }) => {
  const navigate = useNavigate();
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
  const handleDelete = () => {
    // Simulate deletion
    const confirmed = window.confirm(
      "Are you sure you want to delete this query?",
    );
    if (confirmed) {
      axios
        .delete(`http://localhost:5000/query/${_id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      alert(`Query with ID  deleted.`);
      // Add actual deletion logic here (update state or call API)
    }
  };
  return (
    <div
      key={data.id}
      className="rounded-lg border border-gray-200 bg-white p-5 shadow-lg"
    >
      <h3 className="text-xl font-semibold text-gray-800">{query_tItle}</h3>
      <p className="mt-2 text-gray-600">
        <strong>Product:</strong> {product_name}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Brand:</strong> {product_brand}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Boycotting Reason:</strong> {boycotting_reason_details}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Created By:</strong> {owner.name}
      </p>
      <p className="mt-2 text-gray-600">
        <strong>Created At:</strong> {created}
      </p>

      {/* Query Actions */}
      <div className="mt-4 flex space-x-3">
        <button
          className="rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
          onClick={() => navigate(`/querydetails/${_id}`)}
        >
          View Details
        </button>
        <button
          className="rounded-md bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600"
          onClick={() => navigate(`/update-query/${data.id}`)}
        >
          Update
        </button>
        <button
          className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
MyQueryCard.propTypes = {
  data: PropTypes.object,
};

export default MyQueryCard;
