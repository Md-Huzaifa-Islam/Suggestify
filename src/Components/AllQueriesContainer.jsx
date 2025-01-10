import AllQueriesCard from "./AllQueriesCard";
import axios from "axios";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import { TfiLayoutGrid2, TfiLayoutGrid3 } from "react-icons/tfi";
import { TbColumns1 } from "react-icons/tb";
import SectionHeader from "./SectionHeader";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const AllQueriesContainer = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const [layout, setLayout] = useState(1);
  const queryClient = useQueryClient();
  useEffect(() => {
    if (window.matchMedia("(min-width: 1280px)").matches) {
      setLayout(4);
    } else if (window.matchMedia("(min-width: 1024px)").matches) {
      setLayout(3);
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      setLayout(2);
    } else {
      setLayout(1);
    }
  }, []);
  // data fetching function
  // get all query from server
  const getQueries = async () => {
    const { data } = await axios.get(
      `https://product-recommendation-system-server.vercel.app/queries?search=${search}&sort=${sort}`,
    );

    return data;
  };
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["allQueries"],
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
    <div className="mt-10 px-5 md:container md:mx-auto">
      <Helmet>
        <title>All queries || Suggestify</title>
      </Helmet>
      {/* header texts  */}
      <SectionHeader
        heading="Discover All Queries"
        subHeading="Browse through a collection of product queries from users worldwide.
          Find recommendations, alternatives, and insights to make informed
          decisions."
      />
      <div className="mb-5 flex items-center justify-between">
        <div></div>
        <div className="flex items-center gap-4">
          {/* search  */}
          <label className="input input-bordered flex w-96 items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
                queryClient.invalidateQueries(["allQueries"]);
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

          {/* sorting */}
          <select
            onChange={(e) => {
              setSort(e.target.value);
              queryClient.invalidateQueries(["allQueries"]);
            }}
            className="select select-bordered w-full max-w-36"
          >
            <option value={false}>Most recent</option>
            <option value={true}>Old first</option>
          </select>
        </div>
        <div className="flex flex-col items-center gap-2 font-medium">
          <p className="hidden text-white md:flex">Layouts</p>
          <div className="hidden gap-3 rounded-md border border-white px-3 py-2 text-white md:flex">
            <div
              onClick={() => setLayout(3)}
              className={` ${layout == 3 ? "text-primaryBtn" : "hover:text-red-500"}`}
            >
              <TfiLayoutGrid3 size={20} />
            </div>
            <div
              onClick={() => setLayout(2)}
              className={` ${layout == 2 ? "text-primaryBtn" : "hover:text-red-500"}`}
            >
              <TfiLayoutGrid2 size={20} />
            </div>
            <div
              onClick={() => setLayout(1)}
              className={` ${layout == 1 ? "text-primaryBtn" : "hover:text-red-500"}`}
            >
              <TbColumns1 size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* card container section  */}

      {data && !isFetching ? (
        <div
          className={`grid grid-cols-1 justify-items-center gap-5 gap-y-14 md:grid-cols-${layout} lg:grid-cols-${layout} xl:grid-cols-${layout}`}
        >
          {data.map((d) => (
            <AllQueriesCard key={d._id} data={d} owner={false} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default AllQueriesContainer;
