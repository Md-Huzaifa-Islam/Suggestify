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
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   sign up with gmail and pass
  const singUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in with gmail and pass
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in or up with gmail
  const signWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //sign out
  const SignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //add name and photo
  const UpdateInfo = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user) {
        const payload = {
          email: user?.email,
        };
        axios
          .post(
            "https://product-recommendation-system-server.vercel.app/jwt",
            payload,
            { withCredentials: true },
          )
          .then(() => {
            setLoading(false);
          })
          .catch((err) => toast.error(err));
      } else {
        axios
          .post(
            "https://product-recommendation-system-server.vercel.app/logout",
            {},
            { withCredentials: true },
          )
          .then(() => {
            setLoading(false);
          })
          .catch((err) => toast.error(err));
      }
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
    SignOut,
    UpdateInfo,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
