import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../assets/logos/logo.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Autoplay } from "swiper/modules";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, SignOut } = useAuth();

  const handleLogout = () => {
    SignOut()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  const links = (
    <>
      <motion.li
        className="flex flex-col border-b-2"
        initial={{ borderColor: "transparent" }}
        whileHover={{
          width: "max-content",
          borderColor: "white",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "transparent" : "transparent",
              padding: isActive ? "5px 0px" : "5px 0px",
              color: isActive ? "white" : "white",
              borderBottom: isActive ? "2px solid white" : "",
              borderRadius: "0px",
            };
          }}
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li
        className="flex flex-col border-b-2"
        initial={{ borderColor: "transparent" }}
        whileHover={{
          width: "max-content",
          borderColor: "white",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <NavLink
          to={"/queries"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "transparent" : "transparent",
              padding: isActive ? "5px 0px" : "5px 0px",
              color: isActive ? "white" : "white",
              borderBottom: isActive ? "2px solid white" : "",
              borderRadius: "0px",
            };
          }}
        >
          Queries
        </NavLink>
      </motion.li>
      {user && (
        <>
          <motion.li
            className="flex flex-col border-b-2"
            initial={{ borderColor: "transparent" }}
            whileHover={{
              width: "max-content",
              borderColor: "white",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "tween",
            }}
          >
            <NavLink
              to={"/recommendationsforme"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "transparent" : "transparent",
                  padding: isActive ? "5px 0px" : "5px 0px",
                  color: isActive ? "white" : "white",
                  borderBottom: isActive ? "2px solid white" : "",
                  borderRadius: "0px",
                };
              }}
            >
              Recommendations For Me
            </NavLink>
          </motion.li>
          <motion.li
            className="flex flex-col border-b-2"
            initial={{ borderColor: "transparent" }}
            whileHover={{
              width: "max-content",
              borderColor: "white",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "tween",
            }}
          >
            <NavLink
              to={"/myqueries"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "transparent" : "transparent",
                  padding: isActive ? "5px 0px" : "5px 0px",
                  color: isActive ? "white" : "white",
                  borderBottom: isActive ? "2px solid white" : "",
                  borderRadius: "0px",
                };
              }}
            >
              My Queries
            </NavLink>
          </motion.li>
          <motion.li
            className="flex flex-col border-b-2"
            initial={{ borderColor: "transparent" }}
            whileHover={{
              width: "max-content",
              borderColor: "white",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "tween",
            }}
          >
            <NavLink
              to={"/myrecommendations"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "transparent" : "transparent",
                  padding: isActive ? "5px 0px" : "5px 0px",
                  color: isActive ? "white" : "white",
                  borderBottom: isActive ? "2px solid white" : "",
                  borderRadius: "0px",
                };
              }}
            >
              My Recommendations
            </NavLink>
          </motion.li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-color1">
      <div className="navbar mb-8 px-5 py-3 font-helvetica text-white md:container md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <Swiper
              effect={"flip"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFlip]}
              className="mySwiper flex h-10 w-20 items-center justify-start"
            >
              <SwiperSlide className="flex items-center justify-start">
                <p>Suggestify</p>
              </SwiperSlide>

              <SwiperSlide className="flex items-center justify-start">
                <img
                  src={logo}
                  className="h-full w-full object-contain"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5">{links}</ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <Link
              to={"/login"}
              className="transform rounded-full border-none bg-primaryBtn px-6 py-[6px] text-[17px] font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-80 active:scale-95 active:font-semibold"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-5">
              <div
                className="avatar z-[100]"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
              >
                <div className="h-10 w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co.com/wzvLS2c/placeholder.webp"
                    }
                    alt="User Avatar"
                    className="h-full w-full object-cover"
                  />
                  <Tooltip id="my-tooltip" />
                </div>
              </div>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
