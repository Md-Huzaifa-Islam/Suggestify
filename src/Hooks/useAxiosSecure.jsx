import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { SignOut } = useAuth();
  useEffect(() => {
    axios.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.status === 401 || err.status === 403) {
          SignOut()
            .then(() => {
              toast.error(`You are logged out for violating token`);
              navigate("/login");
            })
            .catch((err) => toast.error(err));
        }
        return Promise.reject(err);
      },
    );
  }, [SignOut, navigate]);
  return axiosInstance;
};

export default useAxiosSecure;
