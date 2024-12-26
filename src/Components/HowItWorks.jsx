import { motion } from "motion/react";
import HowItWorksStep from "./HowItWorksStep";
import step1Animation from "../assets/animation/Animation1.json";
import step2Animation from "../assets/animation/Animation2.json";
import step3Animation from "../assets/animation/Animation3.json";
const HowItWorks = () => {
  return (
    <section className="mx-auto mb-10 mt-20 text-center text-white">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl/relaxed font-semibold">
          Your Guide to Better Choices
        </h2>
        <p className="text-[17px] opacity-90">
          Here&apos;s how you can make the most of our platform in three simple
          steps!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-3">
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
