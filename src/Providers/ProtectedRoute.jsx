import { useContext } from "react";
import { AuthContext } from "../Contexts/Contexts";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../Components/Spinner";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);
  if (loading) return <Spinner />;
  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
