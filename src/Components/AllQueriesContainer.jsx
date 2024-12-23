import { useEffect, useState } from "react";
import AllQueriesCard from "./AllQueriesCard";
import axios from "axios";

const AllQueriesContainer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/queries`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* header texts  */}
      <div>
        <p>All Query</p>
      </div>
      {/* card container section  */}
      <div className="grid grid-cols-3 gap-11">
        {data && data.map((d) => <AllQueriesCard key={d._id} data={d} />)}
      </div>
    </div>
  );
};

export default AllQueriesContainer;
