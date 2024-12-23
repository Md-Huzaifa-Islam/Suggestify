import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllQueriesCard = ({ data }) => {
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
  console.log(
    boycotting_reason_details,
    created,
    owner,
    product_brand,
    product_image_url,
    product_name,
    query_tItle,
    recommendationCount,
    _id,
  );
  return (
    <div>
      <div className="max-w-md rounded-lg border bg-white p-7">
        <img
          src={product_image_url}
          alt={product_name}
          className="mx-auto h-full w-6/12 rounded-full object-cover object-center"
        />
        <div className="">
          <h2 className="text-center">{product_name}</h2>
          <p className="text-2xl">{query_tItle}</p>
          <div className="flex items-center justify-between">
            <span className="">Recommendations: {recommendationCount}</span>
            <span className="">Posted: 1 day ago</span>
          </div>
          <div className="flex items-center justify-between">
            <Link to={`/queryDetails/${_id}`} className="btn btn-primary">
              Recommend
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
