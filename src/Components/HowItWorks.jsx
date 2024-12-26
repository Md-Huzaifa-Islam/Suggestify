import { motion } from "motion/react";
import HowItWorksStep from "./HowItWorksStep";
import step1Animation from "../assets/animation/Animation1.json";
import step2Animation from "../assets/animation/Animation2.json";
import step3Animation from "../assets/animation/Animation3.json";
const HowItWorks = () => {
  return (
    <section className="mx-auto mb-6 mt-14 text-center text-white md:mb-10 md:mt-20 xl:mb-10 xl:mt-20">
      <motion.div
        className="mb-12 text-center sm:mb-6 md:mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold sm:text-3xl/loose md:text-4xl/relaxed">
          Your Guide to Better Choices
        </h2>
        <p className="text-base opacity-90 sm:text-base md:text-[17px]">
          Here&apos;s how you can make the most of our platform in three simple
          steps!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 justify-items-center gap-8 sm:gap-5 lg:grid-cols-3 lg:gap-8">
        <HowItWorksStep
          animation={step1Animation}
          title="Post Your Query"
          description="Tell us what you're looking for. Simply add a query to get started."
        />
        <HowItWorksStep
          animation={step2Animation}
          title="Get Recommendations"
          description="Browse helpful suggestions from our vibrant community of users."
        />
        <HowItWorksStep
          animation={step3Animation}
          title="Make a Choice"
          description="Find the best product for your needs and make informed decisions."
        />
      </div>
    </section>
  );
};

export default HowItWorks;
