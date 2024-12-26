import Lottie from "lottie-react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

const HowItWorksStep = ({ animation, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center rounded-xl border-2 border-white bg-cardBg p-6 shadow-sm shadow-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 flex size-60 items-end justify-center">
        <Lottie animationData={animation} loop={true} />
      </div>
      <h3 className="mb-2 text-2xl font-semibold text-primaryBtn">{title}</h3>
      <p className="text-center opacity-90">{description}</p>
    </motion.div>
  );
};
HowItWorksStep.propTypes = {
  animation: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default HowItWorksStep;
