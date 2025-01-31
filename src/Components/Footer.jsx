import logo from "../assets/logos/logo.png";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-16 border-t border-white py-8 text-white md:py-12 lg:py-16 xl:py-16">
      {/* top part  */}
      <div className="flex items-center justify-between">
        {/* 2 sides  */}
        <div className="flex flex-col items-center">
          {/* img  */}
          <div className="w-16">
            <img src={logo} className="w-full" alt="" />
          </div>
          <p className="text-2xl font-semibold">Suggestify</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-3xl font-semibold">Social links</p>
          <ul className="flex items-center gap-8 text-primaryBtn">
            <li>
              <a
                href="https://www.facebook.com/Huzaifaislamrokib"
                target="_blank"
              >
                <FaFacebook size={35} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/huzaifaislam/"
                target="_blank"
              >
                <FaLinkedin size={35} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* bottom part */}
      <div className="mt-5 border-t border-white border-opacity-50 pt-5">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
