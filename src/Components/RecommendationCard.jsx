import PropTypes from "prop-types";

const RecommendationCard = ({ data }) => {
  const {
    Recommending_reason_details,
    created,
    main_product,
    owner,
    product_image_url,
    product_name,
    recommender,
    title,
  } = data;
  console.log(
    Recommending_reason_details,
    created,
    main_product,
    owner,
    product_image_url,
    product_name,
    recommender,
    title,
  );
  return (
    <div className="rounded-md border p-4 shadow-sm">
      <p>
        <strong>Recommender:</strong> {recommender.name}
      </p>
      <p>
        <strong>Recommended Product:</strong> {product_name}
      </p>
      <p>
        <strong>Reason:</strong> {Recommending_reason_details}
      </p>
      <img
        src={product_image_url}
        alt={product_name}
        className="mt-2 rounded-md"
      />
      <p className="mt-2 text-sm text-gray-500">Recommended on: Dec 20, 2024</p>
    </div>
  );
};

RecommendationCard.propTypes = {
  data: PropTypes.object,
};

export default RecommendationCard;
