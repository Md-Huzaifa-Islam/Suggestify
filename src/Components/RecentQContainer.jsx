import RecentQCard from "./RecentQCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const RecentQContainer = () => {
  const getRecentQueries = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/queries?recent=true`,
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
      <div className="mx-auto mb-10 mt-20 max-w-3xl text-center text-white">
        <p className="text-4xl/relaxed font-semibold">
          Explore the Latest Queries
        </p>
        <p className="text-[17px] opacity-90">
          Stay updated with the most recent product discussions and
          recommendations from our community. Discover insights, alternatives,
          and suggestions tailored just for you.
        </p>
      </div>
      {/* card container section  */}
      <div className="grid grid-cols-3 grid-rows-2 justify-items-center gap-y-14">
        {data &&
          data.map((query) => <RecentQCard key={query._id} query={query} />)}
      </div>
    </div>
  );
};

export default RecentQContainer;
