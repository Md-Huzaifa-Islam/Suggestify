import { Link } from "react-router-dom";

const MyQueries = () => {
  return (
    <div>
      <div className="">this will contain all the queries i have asked</div>
      {/* add a new query section */}
      <div className="flex items-center justify-center">
        <Link to={"/addquery"}>add a query</Link>
      </div>
    </div>
  );
};

export default MyQueries;
