import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const UpdateQueryPage = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { id } = useParams();

  //update function
  const updateQuery = async (formObject) => {
    const { data } = await axiosSecure.patch(`/queries`, formObject);
    return data;
  };
  //update mutation
  const mutation = useMutation({
    mutationFn: updateQuery,
    onSuccess: (data) => {
      console.log(data);
      toast.success(`Your query is updated `);
      navigate(`/update-query/${id}`);
    },
    onError: (err) => toast.error(err),
  });

  //get data of the query
  const getQueryData = async () => {
    const { data } = await axiosSecure.get(`/query/${id}`);

    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["queryDetails", id],
    queryFn: getQueryData,
  });
  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
        <button>refresh</button>
      </div>
    );

  //update handler
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    formObject.lastUpdatedTime = parseInt(Date.now());
    formObject.id = data?._id;
    mutation.mutate(formObject);
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">update a query now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body" onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="product_name"
                defaultValue={data?.product_name}
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
                name="product_brand"
                defaultValue={data?.product_brand}
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
                name="product_image_url"
                defaultValue={data?.product_image_url}
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
                name="query_tItle"
                defaultValue={data?.query_tItle}
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
                name="boycotting_reason_details"
                defaultValue={data?.boycotting_reason_details}
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

export default UpdateQueryPage;
