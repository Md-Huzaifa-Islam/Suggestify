import Lottie from "lottie-react";
import animation from "../assets/animation/login.json";
const loginAnimation = () => {
  return <Lottie animationData={animation} loop={true} />;
};

export default loginAnimation;
