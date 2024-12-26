import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const AddReview = () => {
  const { user } = useAuth();
  const [view, setView] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  let rating = 0;
  //   function to add data in server
  const addNewReview = async (formObject) => {
    const { data } = await axiosSecure.post(`/review`, formObject);
    return data;
  };

  //   mutation function
  const mutation = useMutation({
    mutationFn: addNewReview,
    onSuccess: (data) => {
      console.log(data);
      toast.success(`Thanks for your review`);
      document.getElementById("allReviewForm").reset();
      setView(false);
      //   update the information
      queryClient.invalidateQueries(["allReviews"]);
    },
    onError: (err) => toast.error(err),
  });

  //add handler
  const handleReview = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    formObject.name = user?.displayName;
    formObject.photo = user?.photoURL;
    formObject.rating = rating;
    console.log(formObject);
    mutation.mutate(formObject);
  };
  return (
    <>
      {!view ? (
        <button
          onClick={() => {
            if (user) setView(true);
            else {
              navigate("/login");
            }
          }}
          className="transform rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 active:scale-95 active:font-semibold"
        >
          Add a review
        </button>
      ) : (
        <div className="w-full max-w-lg">
          (
          <div className="relative mx-auto shrink-0 rounded-lg border-2 border-white bg-cardBg pb-8 text-white shadow-xl shadow-white">
            <div
              onClick={() => {
                setView(false);
              }}
              className="absolute -right-[20px] -top-[20px] cursor-pointer rounded-full bg-white text-red-600"
            >
              <IoMdCloseCircle size={40} />
            </div>
            <p className="mt-8 text-center text-xl font-medium text-primaryBtn">
              Please, give us your valuable review so that we can improve more
            </p>
            <form
              className="card-body grid gap-10 gap-y-5 rounded-lg rounded-b-none bg-cardBg"
              onSubmit={handleReview}
              id="allReviewForm"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    Input Your Review
                  </span>
                </label>

                <textarea
                  className="textarea textarea-bordered border-white bg-cardBg focus:outline-primaryBtn"
                  placeholder="Input your valuable review here"
                  required
                  name="review"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    Rate us
                  </span>
                </label>
                <ReactStars
                  size={40}
                  isHalf={true}
                  onChange={(p) => {
                    rating = p;
                  }}
                />
              </div>
              <div className="form-control mt-6">
                <button className="transform rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 active:scale-95 active:font-semibold">
                  Recommend
                </button>
              </div>
            </form>
          </div>
          )
        </div>
      )}
    </>
  );
};

export default AddReview;
