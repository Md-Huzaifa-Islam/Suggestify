import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const UpdateQueryPage = () => {
  const [update, setUpdate] = useState(false);
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
      setUpdate(false);
      toast.success(`Your query is updated `);
      navigate(`/querydetails/${id}`);
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
    <div className="">
      <Helmet>
        <title>Update Query || Suggestify</title>
      </Helmet>
      {/* head section  */}
      <div className="mx-auto mb-10 max-w-3xl text-center text-white">
        <p className="text-4xl/relaxed font-semibold">Update Query</p>
        <p className="text-[17px] opacity-90">
          Refine your query details to ensure accurate and helpful
          recommendations. Keep your information up-to-date for the best
          results!
        </p>
      </div>
      <div className="mx-auto w-full max-w-3xl shrink-0 rounded-lg border-2 border-white bg-cardBg pb-8 text-white shadow-2xl shadow-white">
        <form
          className="card-body grid gap-10 gap-y-5 rounded-lg rounded-b-none bg-cardBg md:grid-cols-2"
          onSubmit={handleUpdate}
          onChange={() => setUpdate(true)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium text-white">
                Product Name
              </span>
            </label>
            <input
              type="text"
              name="product_name"
              defaultValue={data?.product_name}
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
              name="product_brand"
              defaultValue={data?.product_brand}
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
              name="product_image_url"
              defaultValue={data?.product_image_url}
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
              name="query_tItle"
              defaultValue={data?.query_tItle}
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
              defaultValue={data?.boycotting_reason_details}
              name="boycotting_reason_details"
            ></textarea>
          </div>
          <div className="form-control mt-6 md:col-span-2">
            <button
              onClick={() => console.log("button triggered")}
              className={
                update
                  ? `transform rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 active:scale-95 active:font-semibold`
                  : `rounded-full border border-[#394047] bg-[#1F262E] px-6 py-3 text-[17px] font-medium text-[#394047] transition-all duration-300 ease-in-out active:scale-95 active:font-semibold`
              }
              disabled={!update ? true : false}
            >
              Update the Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateQueryPage;
