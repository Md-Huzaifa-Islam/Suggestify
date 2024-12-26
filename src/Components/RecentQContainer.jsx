import RecentQCard from "./RecentQCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const RecentQContainer = () => {
  const getRecentQueries = async () => {
    const { data } = await axios.get(
      `https://product-recommendation-system-server.vercel.app/queries?recent=true`,
    );
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["recentQueries"],
    queryFn: getRecentQueries,
  });
  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div>
        <p>Error: {error.message}</p>
        <button>refresh</button>
      </div>
    );
  return (
    <div>
      {/* header texts  */}
      <div className="mx-auto mb-6 mt-14 max-w-3xl text-center text-white md:mb-10 md:mt-20 xl:mb-10 xl:mt-20">
        <p className="text-3xl/loose font-semibold sm:text-4xl md:text-4xl/relaxed xl:text-3xl/loose">
          Explore the Latest Queries
        </p>
        <p className="text-base opacity-90 md:text-[17px]">
          Stay updated with the most recent product discussions and
          recommendations from our community. Discover insights, alternatives,
          and suggestions tailored just for you.
        </p>
      </div>
      {/* card container section  */}
      <div className="grid grid-cols-1 justify-items-center gap-5 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-3">
        {data &&
          data.map((query) => <RecentQCard key={query._id} query={query} />)}
      </div>
    </div>
  );
};

export default RecentQContainer;
