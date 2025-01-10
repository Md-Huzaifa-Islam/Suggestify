import AddReview from "./AddReview";
import ReviewSliders from "./ReviewSliders";
import SectionHeader from "./SectionHeader";

const ReviewContainer = () => {
  return (
    <div>
      {/* header texts  */}
      <SectionHeader
        heading="User Reviews"
        subHeading="See what others have to say and share your own thoughts! Your feedback
          helps the community make informed decisions. Add a review to share
          your insights."
      />
      {/* review and add review container  */}
      <div className="flex flex-col items-center justify-center gap-20 lg:flex-row">
        <ReviewSliders />
        <AddReview />
      </div>
    </div>
  );
};

export default ReviewContainer;
