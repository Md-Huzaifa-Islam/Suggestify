import { useEffect, useState } from "react";
import { AuthContext } from "../Contexts/Contexts";
import PropTypes from "prop-types";
import auth from "../Firebase/Firebase_config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   sign up with gmail and pass
  const singUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in with gmail and pass
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in or up with gmail
  const signWithGmail = () => {
    return signInWithPopup(auth, provider);
  };

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
    singUpWithEmail,
    signInWithEmail,
    signWithGmail,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
