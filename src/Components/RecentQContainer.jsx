import { useEffect, useState } from "react";
import RecentQCard from "./RecentQCard";
import axios from "axios";

const RecentQContainer = () => {
  const [queries, setQueries] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/queries?recent=true`)
      .then((data) => setQueries(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* header texts  */}
      <div>
        <p>Recent Query</p>
      </div>
      {/* card container section  */}
      <div className="grid grid-cols-3 gap-11">
        {queries &&
          queries.map((query) => <RecentQCard key={query._id} query={query} />)}
      </div>
    </div>
  );
};

export default RecentQContainer;
