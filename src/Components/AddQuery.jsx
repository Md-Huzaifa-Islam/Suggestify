import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

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
    formObject.created = Date.now();
    mutation.mutate(formObject);
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">add a query now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body" onSubmit={handleAdd}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                name="product_name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Brand</span>
              </label>
              <input
                type="text"
                placeholder="Product Brand"
                name="product_brand"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image-URL</span>
              </label>
              <input
                type="url"
                placeholder="Product Image-URL"
                name="product_image_url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Query TItle</span>
              </label>
              <input
                type="text"
                placeholder="Query TItle"
                name="query_tItle"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Boycotting Reason Details</span>
              </label>
              <input
                type="text"
                placeholder="Boycotting Reason Details"
                name="boycotting_reason_details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add the Query</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuery;
