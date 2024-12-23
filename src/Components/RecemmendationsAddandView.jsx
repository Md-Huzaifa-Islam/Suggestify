import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Contexts/Contexts";
import axios from "axios";

const RecemmendationsAddandView = ({ id, data }) => {
  const { user } = useContext(AuthContext);
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
    // put the new recommendation to database
    axios
      .put("http://localhost:5000/recommendations", formObject)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
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
RecemmendationsAddandView.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default RecemmendationsAddandView;
