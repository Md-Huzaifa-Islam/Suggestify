import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Contexts";
import MyQueryCard from "./MyQueryCard";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // get all query from server
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myqueries?email=${user.email}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [user]);

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
      {!data ? (
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
