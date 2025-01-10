import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { format } from "date-fns";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AllQueriesCard = ({ data, owner }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    created,
    product_image_url,
    product_name,
    query_tItle,
    lastUpdatedTime,
    _id,
    owner: postOwner,
  } = data;

  //delete function
  const deleteQuery = async (id) => {
    const { data } = await axiosSecure.delete(`/query/${id}`);
    return data;
  };
  const mutation = useMutation({
    mutationFn: deleteQuery,
    onSuccess: () => {
      queryClient.invalidateQueries(["myQueries"]);
      Swal.fire({
        title: "Deleted!",
        color: "#fff",
        background: "#000",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
    onError: (err) => toast.error(err),
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      color: "#fff",
      background: "#000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(_id);
      }
    });
  };

  return (
    <div>
      <div className="max-w-md rounded-lg bg-cardBg px-5 py-10 text-white transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-white">
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16 rounded-full border border-gray-300"
            src={postOwner?.photo}
            alt={postOwner?.name}
          />
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <p className="text-xl font-semibold">{postOwner?.name}</p>
            </div>
            <p className="mt-2 opacity-70 sm:mt-0">
              {created === lastUpdatedTime
                ? "Posted: " + format(created, "dd//MM/yyy")
                : "Last Updated: " + format(lastUpdatedTime, "dd//MM/yyy")}
            </p>
          </div>
        </div>
        <img
          src={product_image_url}
          alt={product_name}
          className="mx-auto aspect-square w-6/12 rounded-full object-cover object-center"
        />
        <div className="flex flex-col justify-between">
          <h2 className="mt-2 text-center text-base opacity-60 xl:text-lg">
            {product_name}
          </h2>
          <p className="limit-two-lines mb-4 mt-5 text-xl font-medium xl:text-2xl xl:font-semibold">
            {query_tItle}
          </p>

          {owner ? (
            <div className="mt-3 flex w-full flex-wrap items-center justify-center gap-4">
              <Link
                className="inline-block transform rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold"
                onClick={() => navigate(`/querydetails/${_id}`)}
              >
                View Details
              </Link>
              <Link
                className="inline-block transform rounded-full border-none bg-green-600 px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold"
                onClick={() => navigate(`/update-query/${_id}`)}
              >
                Update
              </Link>
              <button
                onClick={handleDelete}
                className="inline-block transform rounded-full border-none bg-red-600 px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold"
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="mt-3 flex items-center justify-center">
              <Link
                to={`/queryDetails/${_id}`}
                className="inline-block transform rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold"
              >
                Recommend
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
AllQueriesCard.propTypes = {
  data: PropTypes.object.isRequired,
  owner: PropTypes.bool,
};

export default AllQueriesCard;
