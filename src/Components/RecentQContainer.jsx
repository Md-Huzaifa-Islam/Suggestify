import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import AllQueriesCard from "./AllQueriesCard";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

const RecentQContainer = () => {
  const getRecentQueries = async () => {
    const { data } = await axios.get(
      `https://product-recommendation-system-server.vercel.app/queries?recent=true&sort=${false}`,
    );

    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["recentQueries"],
    queryFn: getRecentQueries,
  });

  return (
    <div className="container mx-auto px-5">
      {/* header texts  */}
      <SectionHeader
        heading="Explore the Latest Queries"
        subHeading=" Stay updated with the most recent product discussions and
          recommendations from our community. Discover insights, alternatives,
          and suggestions tailored just for you."
      />
      {/* card container section  */}
      {isLoading && <Spinner />}
      {error && (
        <div>
          <p>Error: {error.message}</p>
          <button>refresh</button>
        </div>
      )}
      {!(isLoading || error) && (
        <div className="grid grid-cols-1 justify-items-center gap-5 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-4">
          {data &&
            data.map((query) => (
              <AllQueriesCard
                data={query}
                key={query._id}
                owner={false}
              ></AllQueriesCard>
            ))}
        </div>
      )}
      {!(isLoading || error) && (
        <div className="flex justify-center">
          <Link
            to={"/queries"}
            className="mt-3 inline-block transform rounded-full border-none bg-primaryBtn px-5 py-2 text-[17px] text-base font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold sm:mt-4 md:px-6 md:py-3 md:text-[17px] lg:mt-5 xl:mt-8 xl:px-6 xl:py-3"
          >
            See more
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecentQContainer;
