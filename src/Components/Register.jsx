import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/Contexts";

const Register = () => {
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
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  //gmail login section
  const handleGmail = () => {
    signWithGmail()
      .then((user) => console.log(user.user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 pb-8 shadow-2xl">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="url"
                placeholder="PhotoUrl"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGmail}>Register with Google</button>
          <p className="mx-auto">
            Already have an account?{" "}
            <Link to={"/login"} className="text-xl">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
