import { motion } from "motion/react";
import PropTypes from "prop-types";
export default function SectionHeader({ heading, subHeading }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center text-white sm:mb-6 md:mb-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold sm:text-3xl/loose md:text-4xl/relaxed">
        {heading}
      </h2>
      <p className="text-base opacity-90 sm:text-base md:text-[17px]">
        {subHeading}
      </p>
    </motion.div>
  );
}

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};
