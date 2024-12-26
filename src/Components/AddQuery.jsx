import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddQuery = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const addNewQuery = async (formObject) => {
    const { data } = await axiosSecure.post(`/queries`, formObject);
    return data;
  };
  const mutation = useMutation({
    mutationFn: addNewQuery,
    onSuccess: (data) => {
      console.log(data);
      toast.success(`Your query is added `);
      navigate("/myqueries");
    },
    onError: (err) => toast.error(err),
  });
  const handleAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    formObject.owner = {
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
    };
    formObject.recommendationCount = 0;
    const time = Date.now();
    formObject.created = time;
    formObject.lastUpdatedTime = time;
    mutation.mutate(formObject);
  };
  return (
    <div className=" ">
      <Helmet>
        <title>Add query || Suggestify</title>
      </Helmet>
      {/* head section  */}
      <div className="mx-auto mb-10 max-w-3xl text-center text-white">
        <p className="text-4xl/relaxed font-semibold">Add Your Query</p>
        <p className="text-[17px] opacity-90">
          Have a product question or looking for alternatives? Share your query
          with the community and get personalized recommendations tailored to
          your needs
        </p>
      </div>
      <div className="mx-auto w-full max-w-3xl shrink-0 rounded-lg border-2 border-white bg-cardBg pb-8 text-white shadow-2xl shadow-white">
        <form
          className="card-body grid gap-10 gap-y-5 rounded-lg rounded-b-none bg-cardBg md:grid-cols-2"
          onSubmit={handleAdd}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium text-white">
                Product Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              name="product_name"
              className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium text-white">
                Product Brand
              </span>
            </label>
            <input
              type="text"
              placeholder="Product Brand"
              name="product_brand"
              className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium text-white">
                Product Image-URL
              </span>
            </label>
            <input
              type="url"
              placeholder="Product Image-URL"
              name="product_image_url"
              className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium text-white">
                Query TItle
              </span>
            </label>
            <input
              type="text"
              placeholder="Query TItle"
              name="query_tItle"
              className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
              required
            />
          </div>
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text text-lg font-medium text-white">
                Boycotting Reason Details
              </span>
            </label>

            <textarea
              className="textarea textarea-bordered border-white bg-cardBg focus:outline-primaryBtn"
              placeholder="Boycotting Reason Details"
              required
              name="boycotting_reason_details"
            ></textarea>
          </div>
          <div className="form-control mt-6 md:col-span-2">
            <button className="transform rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 active:scale-95 active:font-semibold">
              Add the Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuery;
