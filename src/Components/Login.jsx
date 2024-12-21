import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id
            nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 pb-8 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button>Login with Google</button>
          <p className="mx-auto">
            Don&apos;t have any account?{" "}
            <Link to={"/register"} className="text-xl">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
