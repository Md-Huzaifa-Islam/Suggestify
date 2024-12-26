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
    onSuccess: () => {
      queryClient.invalidateQueries(["allRecommendations", id]);
      document.getElementById("recommendForm").reset();
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
    <div className="mt-24 grid gap-12">
      {/* Add Recommendation Form */}
      {dataP?.owner?.email === user?.email ? (
        <div className="text-center text-3xl font-bold sm:text-4xl">
          <p>You can not recommend on your own query</p>
        </div>
      ) : (
        <div className="mb-6 grid gap-7">
          <h2 className="text-center text-3xl font-semibold">
            Add a Recommendation
          </h2>
          <div className="mx-auto w-full max-w-3xl shrink-0 rounded-lg border-2 border-white bg-cardBg pb-8 text-white shadow-lg shadow-white sm:shadow-2xl">
            <form
              className="card-body grid gap-10 gap-y-5 rounded-lg rounded-b-none bg-cardBg"
              onSubmit={handleSubmitRecommendation}
              id="recommendForm"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    Recommendation Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Recommendation Title"
                  className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    Recommended product Name
                  </span>
                </label>
                <input
                  type="text"
                  name="product_name"
                  placeholder="Recommended product Name"
                  className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    Recommended Product Image
                  </span>
                </label>
                <input
                  type="url"
                  name="product_image_url"
                  placeholder="Recommended Product Image"
                  className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    Recommendation reason
                  </span>
                </label>

                <textarea
                  className="textarea textarea-bordered border-white bg-cardBg focus:outline-primaryBtn"
                  placeholder="Recommendation reason"
                  required
                  name="Recommending_reason_details"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="transform rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 active:scale-95 active:font-semibold">
                  Recommend
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* All Recommendations */}
      <div className="rounded-md p-4 shadow-sm">
        <h2 className="mb-4 text-3xl font-medium">
          {data && data.length == 0
            ? "No Recommendation Yet"
            : "All Recommendations"}
        </h2>
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
