const RecentQCard = () => {
  return (
    <div>
      <div className="max-w-md rounded-lg border bg-white p-7">
        <img
          src="https://www.primaverakitchen.com/wp-content/uploads/2024/05/Tomato-Sauce-16-500x500.jpg"
          alt="Product Image"
          className="mx-auto h-full w-6/12 rounded-full object-cover object-center"
        />
        <div className="">
          <h2 className="text-center">Product Name</h2>
          <p className="text-2xl">Query Title</p>
          <div className="flex items-center justify-between">
            <span className="">Recommendations: 5</span>
            <span className="">Posted: 1 day ago</span>
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentQCard;
