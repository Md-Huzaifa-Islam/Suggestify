import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const MyQueryCard = ({ data }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
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

  //delete function
  const deleteQuery = async (id) => {
    const { data } = await axiosSecure.delete(`/query/${id}`);
    return data;
  };
  const mutation = useMutation({
    mutationFn: deleteQuery,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["myQueries"]);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
    onError: (err) => console.log(err),
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(_id);
      }
    });
  };
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
          <div className="mt-10 flex items-center justify-center gap-4">
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
        </div>
      </div>
    </div>
  );
};
MyQueryCard.propTypes = {
  data: PropTypes.object,
};

export default MyQueryCard;
