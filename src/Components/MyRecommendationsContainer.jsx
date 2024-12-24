import { format } from "date-fns";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Spinner from "./Spinner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const MyRecommendationsContainer = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  //delete function
  const deleteRecommendation = async (id) => {
    const { data } = await axiosSecure.delete(`/recommendations/${id}`);
    return data;
  };
  //delete mutation
  const mutation = useMutation({
    mutationFn: deleteRecommendation,
    onSuccess: (data) => {
      console.log("deleted", data);
      queryClient.invalidateQueries(["myRecommendations"]);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    },
    onError: (err) => toast.error(err),
  });
  // extract data from server
  const getMyRecommendations = async () => {
    const { data } = await axiosSecure.get(
      `/recommendations?email=${user.email}`,
    );
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["myRecommendations"],
    queryFn: getMyRecommendations,
  });
  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
        <button>refresh</button>
      </div>
    );

  //delete button handler
  const handleDelete = (id) => {
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
        axiosSecure;
        mutation.mutate(id);
      }
    });
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-2xl font-bold">My Recommendations</h1>
      <table className="w-full border-collapse border border-gray-200 shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">No</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Query Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Recommended Product
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Reason
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((recommendation, index) => (
            <tr
              key={recommendation._id}
              className="transition-colors hover:bg-gray-50"
            >
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                {recommendation?.main_product?.query_tItle}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {recommendation?.product_name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {recommendation?.Recommending_reason_details}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {format(recommendation?.created, "dd/MM/yyy")}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(recommendation?._id)}
                  className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRecommendationsContainer;
