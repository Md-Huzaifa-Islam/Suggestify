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
      <div>
        <p>Recent Query</p>
      </div>
      {/* card container section  */}
      <div className="grid grid-cols-3 gap-11">
        {data.map((query) => (
          <RecentQCard key={query._id} query={query} />
        ))}
      </div>
    </div>
  );
};

export default RecentQContainer;
