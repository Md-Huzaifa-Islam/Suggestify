import { FaBackward, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center bg-mainBg">
      <div className="grid gap-2 rounded-lg bg-cardBg p-10 text-center text-white">
        <p className="text-6xl text-red-600">404</p>
        <p className="text-lg opacity-80">Page not found</p>
        <p className="text-lg">
          The page you are looking for does not exist or other error occurred
        </p>
        <div className="mt-5 flex items-center justify-center gap-5">
          <div
            onClick={() => navigate(-1)}
            className="flex transform items-center gap-4 rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 active:scale-95 active:font-semibold"
          >
            <FaBackward />
            <p>Go Back</p>
          </div>
          <div
            onClick={() => navigate("/")}
            className="flex transform items-center gap-3 rounded-full border-none bg-primaryBtn px-6 py-3 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 active:scale-95 active:font-semibold"
          >
            <p>Go Home</p>
            <FaHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
