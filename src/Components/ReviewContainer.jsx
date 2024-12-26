import AddReview from "./AddReview";
import ReviewSliders from "./ReviewSliders";

const ReviewContainer = () => {
  return (
    <div>
      {/* header texts  */}
      <div className="mx-auto mb-10 mt-20 max-w-3xl text-center text-white">
        <p className="text-4xl/relaxed font-semibold">User Reviews</p>
        <p className="text-[17px] opacity-90">
          See what others have to say and share your own thoughts! Your feedback
          helps the community make informed decisions. Add a review to share
          your insights.
        </p>
      </div>
      {/* review and add review container  */}
      <div className="flex items-center justify-center gap-20">
        <ReviewSliders />
        <AddReview />
      </div>
    </div>
  );
};

export default ReviewContainer;
