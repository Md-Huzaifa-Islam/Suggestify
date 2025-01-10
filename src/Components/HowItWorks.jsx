import HowItWorksStep from "./HowItWorksStep";
import step1Animation from "../assets/animation/Animation1.json";
import step2Animation from "../assets/animation/Animation2.json";
import step3Animation from "../assets/animation/Animation3.json";
import SectionHeader from "./SectionHeader";
const HowItWorks = () => {
  return (
    <section className="mx-auto px-5 text-center text-white md:container">
      <SectionHeader
        heading="Your Guide to Better Choices"
        subHeading="Here's how you can make the most of our platform in three simple
          steps!"
      />

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
