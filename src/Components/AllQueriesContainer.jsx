import AllQueriesCard from "./AllQueriesCard";
import axios from "axios";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AllQueriesContainer = () => {
  const [search, setSearch] = useState("");
  // data fetching function
  // fetch function
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://product-recommendation-system-server.vercel.app/queries?search=${search}`,
      )
      .then((res) => setData(res.data))
      .catch((err) => toast.error(err));
  }, [search]);

  return (
    <div>
      <Helmet>
        <title>All queries || Suggestify</title>
      </Helmet>
      {/* header texts  */}
      <div className="mx-auto mb-6 mt-12 max-w-3xl text-center text-white md:mb-10 md:mt-20 xl:mb-10 xl:mt-20">
        <p className="text-3xl/loose font-semibold sm:text-3xl/loose md:text-4xl/relaxed">
          Discover All Queries
        </p>
        <p className="text-base opacity-90 md:text-[17px]">
          Browse through a collection of product queries from users worldwide.
          Find recommendations, alternatives, and insights to make informed
          decisions.
        </p>
      </div>
      <div className="mb-5 flex justify-center">
        <label className="input input-bordered flex w-96 items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {/* card container section  */}
      {data ? (
        <div className="grid grid-cols-1 justify-items-center gap-5 gap-y-14 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {data && data.map((d) => <AllQueriesCard key={d._id} data={d} />)}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default AllQueriesContainer;
