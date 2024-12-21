import { useEffect, useState } from "react";
import { AuthContext } from "../Contexts/Contexts";
import PropTypes from "prop-types";
import auth from "../Firebase/Firebase_config";
import { onAuthStateChanged } from "firebase/auth";

const AuthProvider = ({ children }) => {
  // state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const info = {
    user,
    setUser,
    loading,
    setLoading,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
