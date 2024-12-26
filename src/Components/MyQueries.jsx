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
        className="relative mx-auto mb-12 flex h-64 max-w-7xl items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat text-center sm:mb-14 sm:h-96 md:mb-24 xl:mb-24"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/YQhhNxf/addpostbg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative max-w-3xl px-4 text-white">
          <h2 className="mb-3 text-center text-2xl font-semibold text-white sm:mb-6 sm:text-4xl">
            Add Your Product Query
          </h2>
          <p className="text-sm opacity-90 sm:text-[17px]">
            Have a question about a product? Share it with the community and
            discover great recommendations!
          </p>
          <button
            className="mt-4 inline-block transform rounded-full border-none bg-primaryBtn px-4 py-2 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-semibold sm:mt-8 sm:px-6 sm:py-3 xl:mt-8"
            onClick={() => navigate("/addquery")}
          >
            Add a New Query
          </button>
        </div>
      </div>
      {/* header text part  */}
      <div className="mx-auto mb-10 max-w-3xl text-center text-white sm:mb-6 md:mb-10">
        <p className="text-3xl font-semibold sm:text-3xl/loose md:text-4xl/relaxed">
          Check out your recent queries
        </p>
        <p className="mt-2 text-sm opacity-90 sm:mt-0 sm:text-[17px]">
          View all your submitted queries in one place. Manage, update, or
          delete your queries with ease and stay connected with the community.
        </p>
      </div>
      {/* My Queries Section */}
      {data && data.length === 0 ? (
        <div className="text-center text-white">
          <p>
            No queries found. Click the Add a new query button above to add your
            query.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 justify-items-center gap-5 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {data &&
            data.map((query) => <MyQueryCard data={query} key={query._id} />)}
        </div>
      )}
    </div>
  );
};

export default MyQueries;
