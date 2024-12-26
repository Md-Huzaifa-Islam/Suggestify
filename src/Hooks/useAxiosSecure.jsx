import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { SignOut } = useAuth();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.status == 401 || error.status === 403) {
          SignOut()
            .then((res) => {
              console.log(res);
              navigate("/login");
              toast.error(
                "Your access token is invalid. So you have to log in again",
              );
            })
            .catch((err) => console.log(err));
        }
        return Promise.reject(error);
      },
    );
  }, [SignOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
