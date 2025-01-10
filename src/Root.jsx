import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Root = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-mainBg font-helvetica">
      <div>
        <header className="sticky top-0 z-[200]">
          <Navbar />
        </header>
        <main className="space-y-14 md:space-y-16 lg:space-y-20">
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
