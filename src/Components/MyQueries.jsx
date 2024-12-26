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
    <div className="">
      {/* Add Query Banner */}
      <div
        className="relative mx-auto mb-24 flex h-96 max-w-7xl items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat text-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/YQhhNxf/addpostbg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative max-w-3xl px-4 text-white">
          <h2 className="mb-6 text-center text-4xl font-semibold text-white">
            Add Your Product Query
          </h2>
          <p className="text-[17px] opacity-90">
            Have a question about a product? Share it with the community and
            discover great recommendations!
          </p>
          <button
            className="mt-8 inline-block transform rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold"
            onClick={() => navigate("/addquery")}
          >
            Add a New Query
          </button>
        </div>
      </div>
      {/* header text part  */}
      <div className="mx-auto mb-10 max-w-3xl text-center text-white">
        <p className="text-4xl/relaxed font-semibold">
          Check out your recent queries
        </p>
        <p className="text-[17px] opacity-90">
          View all your submitted queries in one place. Manage, update, or
          delete your queries with ease and stay connected with the community.
        </p>
      </div>
      {/* My Queries Section */}
      {data.length === 0 ? (
        <div className="text-center text-white">
          <p>
            No queries found. Click the Add a new query button above to add your
            query.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 justify-items-center gap-y-14">
          {data &&
            data.map((query) => <MyQueryCard data={query} key={query._id} />)}
        </div>
      )}
    </div>
  );
};

export default MyQueries;
