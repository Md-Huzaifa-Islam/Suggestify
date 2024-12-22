import RecentQCard from "./RecentQCard";

const RecentQContainer = () => {
  return (
    <div>
      {/* header texts  */}
      <div>
        <p>Recent Query</p>
      </div>
      {/* card container section  */}
      <div className="grid grid-cols-3 gap-11">
        <RecentQCard />
      </div>
    </div>
  );
};

export default RecentQContainer;
