import Lottie from "lottie-react";
import animation from "../assets/animation/loading.json";
const Spinner = () => {
  return (
    <div className="mx-auto w-44">
      <Lottie animationData={animation} loop={true} />
    </div>
  );
};

export default Spinner;
