import AddReview from "./AddReview";
import ReviewSliders from "./ReviewSliders";

const ReviewContainer = () => {
  return (
    <div>
      {/* header texts  */}
      <div className="mx-auto mb-6 mt-14 max-w-3xl text-center text-white md:mb-10 md:mt-20 xl:mb-10">
        <p className="text-3xl/loose font-semibold sm:text-3xl/loose md:text-4xl/relaxed">
          User Reviews
        </p>
        <p className="text-base opacity-90 md:text-[17px]">
          See what others have to say and share your own thoughts! Your feedback
          helps the community make informed decisions. Add a review to share
          your insights.
        </p>
      </div>
      {/* review and add review container  */}
      <div className="flex flex-col items-center justify-center gap-20 lg:flex-row">
        <ReviewSliders />
        <AddReview />
      </div>
    </div>
  );
};

export default ReviewContainer;
