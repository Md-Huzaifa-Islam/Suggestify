import { useContext } from "react";
import { AuthContext } from "../Contexts/Contexts";

const QueryDetails = () => {
  const { user } = useContext(AuthContext);

  //data came for this product
  const data = {
    _id: "67678797c43b49285a05c440",
    boycotting_reason_details: "Battery drains too quickly.",
    created: 1734741201000,

    owner: {
      email: "user2@example.com",
      name: "Jane Smith",
      photo: "https://via.placeholder.com/50",
    },
    product_brand: "BrandY",
    product_image_url: "https://via.placeholder.com/150",
    product_name: "Laptop ABC",
    query_tItle: "Can I get a laptop with more RAM in this range?",
    recommendationCount: 3,
  };

  // handle add new recommendation
  const handleSubmitRecommendation = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const formObject = Object.fromEntries(formdata.entries());
    formObject.created = Date.now();
    formObject.recommender = {
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
    };
    formObject.owner = { ...data.owner };
    formObject.main_product = {
      id: data._id,
      query_tItle: data.query_tItle,
      product_name: data.product_name,
    };
    console.log(formObject);
  };
  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* Query Information */}
      <div className="mb-6 rounded-md border p-4 shadow-sm">
        <h1 className="mb-2 text-2xl font-bold">Query Details</h1>
        <p>
          <strong>Query Title:</strong> Is there any better alternative for
          Product X?
        </p>
        <p>
          <strong>Product Name:</strong> Product X
        </p>
        <p>
          <strong>User:</strong> John Doe (john.doe@example.com)
        </p>
        <p>
          <strong>Posted On:</strong> Dec 21, 2024
        </p>
      </div>

      {/* Add Recommendation Form */}
      <div className="mb-6 rounded-md border p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Add a Recommendation</h2>
        <form className="card-body" onSubmit={handleSubmitRecommendation}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recommendation Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Recommendation Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recommended product Name</span>
            </label>
            <input
              type="text"
              name="product_name"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recommended Product Image</span>
            </label>
            <input
              type="url"
              name="product_image_url"
              placeholder="Recommended Product Image"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recommendation reason</span>
            </label>
            <input
              type="text"
              name="Recommending_reason_details"
              placeholder="Recommendation reason"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>

      {/* All Recommendations */}
      <div className="rounded-md border p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">All Recommendations</h2>
        <div className="space-y-4">
          {/* Recommendation Item */}
          <div className="rounded-md border p-4 shadow-sm">
            <p>
              <strong>Recommender:</strong> Jane Smith (jane.smith@example.com)
            </p>
            <p>
              <strong>Recommended Product:</strong> Product Y
            </p>
            <p>
              <strong>Reason:</strong> It has better features and is more
              affordable.
            </p>
            <img
              src="https://via.placeholder.com/150"
              alt="Product Y"
              className="mt-2 rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">
              Recommended on: Dec 20, 2024
            </p>
          </div>

          {/* Another Recommendation Item */}
          <div className="rounded-md border p-4 shadow-sm">
            <p>
              <strong>Recommender:</strong> Alex Johnson
              (alex.johnson@example.com)
            </p>
            <p>
              <strong>Recommended Product:</strong> Product Z
            </p>
            <p>
              <strong>Reason:</strong> Excellent reviews and superior customer
              service.
            </p>
            <img
              src="https://via.placeholder.com/150"
              alt="Product Z"
              className="mt-2 rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">
              Recommended on: Dec 19, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
