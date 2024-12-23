import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

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
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/queries"}>Queries</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/recommendationsforme"}>
              Recommendations For Me
            </NavLink>
          </li>
          <li>
            <NavLink to={"/myqueries"}>My Queries</NavLink>
          </li>
          <li>
            <NavLink to={"/myrecommendations"}>My Recommendations</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
          daisyUI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link to={"/login"} className="btn">
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="h-10 w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co.com/wzvLS2c/placeholder.webp"
                  }
                  alt="User Avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
