import AllQueriesCard from "./AllQueriesCard";

const AllQueriesContainer = () => {
  return (
    <div>
      {/* header texts  */}
      <div>
        <p>All Query</p>
      </div>
      {/* card container section  */}
      <div className="grid grid-cols-3 gap-11">
        <AllQueriesCard />
      </div>
    </div>
  );
};

export default AllQueriesContainer;
