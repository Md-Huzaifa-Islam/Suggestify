import { useEffect, useState } from "react";
import AllQueriesCard from "./AllQueriesCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
// fetch functin
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
      <div>
        <p>All Query</p>
      </div>
      {/* card container section  */}
      <div className="grid grid-cols-3 gap-11">
        {data.map((d) => (
          <AllQueriesCard key={d._id} data={d} />
        ))}
      </div>
    </div>
  );
};

export default AllQueriesContainer;
