import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import RecentQContainer from "./RecentQContainer";
import ReviewContainer from "./ReviewContainer";

const Home = () => {
  return (
    <>
      <section className="">
        <Banner />
      </section>
      <section>
        <RecentQContainer />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <ReviewContainer />
      </section>
    </>
  );
};

export default Home;
