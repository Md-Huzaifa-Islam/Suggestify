import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Contexts";
import { toast } from "react-toastify";
import { useLottie } from "lottie-react";
import { motion } from "motion/react";
import signupAnimation from "../assets/animation/signup.json";
import { FaGoogle } from "react-icons/fa";
const Register = () => {
  const navigate = useNavigate();
  // animation
  const options = {
    animationData: signupAnimation,
    loop: true,
  };

  const { View } = useLottie(options);
  const { singUpWithEmail, UpdateInfo, signWithGmail, setUser } =
    useContext(AuthContext);
  //login with email
  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    singUpWithEmail(formObject.email, formObject.password)
      .then((user) => {
        console.log(user.user);
        UpdateInfo(formObject.name, formObject.photo)
          .then(() => {
            setUser({
              ...user.user,
              displayName: formObject.name,
              photoURL: formObject.photo,
            });
            navigate("/");
            toast.success(`Congrats! Your account is created`);
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) => toast.error(err));
  };
  //gmail login section
  const handleGmail = () => {
    signWithGmail()
      .then((user) => {
        console.log(user.user);
        navigate("/");
        toast.success(`Congrats! Your account is created`);
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div className="md:hero">
      <div className="md:hero-content md:grid md:grid-cols-2 md:justify-items-center">
        <div className="hidden md:block">{View}</div>
        <div className="mx-auto w-full max-w-md md:mx-0">
          <p className="mb-7 text-center text-4xl font-semibold text-white">
            Register
          </p>

          <motion.div
            className="w-full max-w-md shrink-0 rounded-lg border-2 border-white bg-cardBg pb-8 text-white shadow-2xl shadow-white"
            animate={{
              boxShadow: [
                "0px 0px 0px 0px white",
                "0 20px 25px -5px white",
                "0px 0px 0px 0px white",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <form
              className="card-body rounded-lg rounded-b-none bg-cardBg"
              onSubmit={handleSignUp}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium text-white">
                    PhotoURL
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="PhotoUrl"
                  name="photo"
                  className="input input-bordered border-white bg-cardBg focus:outline-primaryBtn"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="transform rounded-full border-none bg-primaryBtn px-6 py-2 text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 active:scale-95 active:font-semibold">
                  Register
                </button>
              </div>
            </form>
            <div className="divider my-0 py-8 text-white before:bg-white after:bg-white">
              OR
            </div>
            <div
              onClick={handleGmail}
              className="mx-auto flex w-max items-center gap-2 rounded-full border border-white px-5 py-2 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <FaGoogle size={20} color="#4285F4" />
              <p className="text-lg font-medium">Register with Google</p>
            </div>
            <p className="mx-auto mt-5 text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="text-xl text-blue-500">
                Login
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
