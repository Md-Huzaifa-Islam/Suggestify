import PropTypes from "prop-types";
import RecommendationCard from "./RecommendationCard";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "./Spinner";

const RecommendationsAddAndView = ({ id, dataP }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  // Function to add new recommendation
  const addNewRecommendation = async (formObject) => {
    const { data } = await axiosSecure.post("/recommendations", formObject);
    return data;
  };

  // Mutation for adding recommendation
  const mutate = useMutation({
    mutationFn: addNewRecommendation,
    onSuccess: (newRecommendation) => {
      console.log(newRecommendation);
      queryClient.invalidateQueries(["allRecommendations", id]);
      toast.success("Thank you for your recommendations!");
    },
    onError: (err) => toast.error("Error: " + err.message),
  });

  // Function to fetch all recommendations
  const getAllRecommendations = async () => {
    const { data } = await axiosSecure.get(`/recommendations/${id}`);
    return data;
  };

  // Fetching recommendations using React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["allRecommendations", id],
    queryFn: getAllRecommendations,
    refetchOnWindowFocus: false, // Don't refetch on window focus
    staleTime: Infinity, // Keep data fresh indefinitely since we're manually updating
  });

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  // Handle adding a new recommendation
  const handleSubmitRecommendation = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const formObject = Object.fromEntries(formdata.entries());
    formObject.created = Date.now();
    formObject.recommender = {
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
    };
    formObject.owner = { ...dataP.owner };
    formObject.main_product = {
      id: dataP._id,
      query_tItle: dataP.query_tItle,
      product_name: dataP.product_name,
    };
    // Post the new recommendation to the database
    mutate.mutate(formObject);
  };

  return (
    <div>
      {/* Add Recommendation Form */}
      {dataP?.owner?.email === user?.email ? (
        <div>
          <p>You can not recommend on your own query</p>
        </div>
      ) : (
        <div className="mb-6 rounded-md border p-4 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Add a Recommendation</h2>
          <form className="card-body" onSubmit={handleSubmitRecommendation}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recommendation Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Recommendation Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recommended product Name</span>
              </label>
              <input
                type="text"
                name="product_name"
                placeholder="Recommended product Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recommended Product Image</span>
              </label>
              <input
                type="url"
                name="product_image_url"
                placeholder="Recommended Product Image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recommendation reason</span>
              </label>
              <input
                type="text"
                name="Recommending_reason_details"
                placeholder="Recommendation reason"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Recommend</button>
            </div>
          </form>
        </div>
      )}

      {/* All Recommendations */}
      <div className="rounded-md border p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">All Recommendations</h2>
        <div className="space-y-4">
          {/* Render each recommendation */}
          {data &&
            data.map((d) => {
              return <RecommendationCard key={d._id} data={d} />;
            })}
        </div>
      </div>
    </div>
  );
};

RecommendationsAddAndView.propTypes = {
  id: PropTypes.string.isRequired,
  dataP: PropTypes.object.isRequired,
};

export default RecommendationsAddAndView;
