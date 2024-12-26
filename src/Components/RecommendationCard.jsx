import { format } from "date-fns";
import PropTypes from "prop-types";

const RecommendationCard = ({ data }) => {
  const {
    Recommending_reason_details,
    created,
    product_image_url,
    product_name,
    recommender,
    title,
  } = data;

  return (
    <div className="rounded-md border p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="size-14">
          <img
            src={recommender?.photo}
            className="h-full w-full rounded-full object-cover object-center"
            alt=""
          />
        </div>
        <div>
          <p className="text-xl font-semibold">
            {recommender?.name}{" "}
            <span className="text-base font-normal">recommended</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Recommended on: {format(created, "dd//MM/yyy")}
          </p>
        </div>
      </div>
      <p className="pt-3 text-lg">{title} : </p>
      <p className="pb-4 italic">{Recommending_reason_details}</p>

      <div className="size-28">
        <img
          src={product_image_url}
          alt={product_name}
          className="h-full w-full rounded-md object-contain object-center"
        />
      </div>
      <p className=" ">Product Name : {product_name}</p>
    </div>
  );
};

RecommendationCard.propTypes = {
  data: PropTypes.object,
};

export default RecommendationCard;
