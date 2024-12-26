import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Root = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-mainBg font-helvetica">
      <div>
        <header>
          <Navbar />
        </header>
        <main className="px-5 md:container md:mx-auto">
          <Outlet />
        </main>
      </div>
      <footer className="px-5 md:container md:mx-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
