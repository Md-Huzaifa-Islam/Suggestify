import { useNavigate } from "react-router-dom";
import MyQueryCard from "./MyQueryCard";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const MyQueries = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  // get all query from server
  const getQueries = async () => {
    const { data } = await axiosSecure.get(`/myqueries?email=${user.email}`);
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["myQueries"],
    queryFn: getQueries,
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
    <div className="mx-auto max-w-7xl p-6">
      {/* Add Query Banner */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-800">My Queries</h1>
        <button
          className="rounded-md bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600"
          onClick={() => navigate("/addquery")}
        >
          Add Query
        </button>
      </div>

      {/* My Queries Section */}
      {data.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>No queries found. Click the button above to add your query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((query) => (
            <MyQueryCard data={query} key={query._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyQueries;
