import AllQueriesCard from "./AllQueriesCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
// fetch function
const getPosts = async () => {
  const { data } = await axios.get(`http://localhost:5000/queries`);
  return data;
};

const AllQueriesContainer = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allQueries"],
    queryFn: getPosts,
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
      <div className="mx-auto mb-10 max-w-3xl text-center text-white">
        <p className="text-4xl/relaxed font-semibold">Discover All Queries</p>
        <p className="text-[17px] opacity-90">
          Browse through a collection of product queries from users worldwide.
          Find recommendations, alternatives, and insights to make informed
          decisions.
        </p>
      </div>
      {/* card container section  */}
      <div className="grid grid-cols-3 grid-rows-2 justify-items-center gap-y-14">
        {data && data.map((d) => <AllQueriesCard key={d._id} data={d} />)}
      </div>
    </div>
  );
};

export default AllQueriesContainer;
