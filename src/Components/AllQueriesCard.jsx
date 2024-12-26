import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { format } from "date-fns";

const AllQueriesCard = ({ data }) => {
  const {
    created,

    product_image_url,
    product_name,
    query_tItle,
    recommendationCount,
    _id,
  } = data;

  return (
    <div>
      <div className="bg-cardBg max-w-md rounded-lg px-5 py-10 text-white transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-white">
        <img
          src={product_image_url}
          alt={product_name}
          className="mx-auto aspect-square w-6/12 rounded-full object-cover object-center"
        />
        <div className="flex flex-col justify-between">
          <h2 className="mt-2 text-center text-lg opacity-60">
            {product_name}
          </h2>
          <p className="limit-two-lines mb-4 mt-5 text-3xl font-semibold">
            {query_tItle}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg">
              Recommendations: {recommendationCount}
            </span>
            <span className="text-lg">
              Posted: {format(created, "dd//MM/yyy")}
            </span>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Link
              to={`/queryDetails/${_id}`}
              className="inline-block transform rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold"
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
AllQueriesCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AllQueriesCard;
