import { useContext } from "react";
import { AuthContext } from "../Contexts/Contexts";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);
  if (loading)
    return <span className="loading loading-spinner loading-lg"></span>;
  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
