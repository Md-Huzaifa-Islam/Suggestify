const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 text-gray-300">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Branding Section */}
          <div className="text-lg font-semibold">
            <a href="/" className="text-white hover:text-gray-400">
              QueryHub
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="/about" className="transition-colors hover:text-gray-400">
              About Us
            </a>
            <a
              href="/contact"
              className="transition-colors hover:text-gray-400"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="transition-colors hover:text-gray-400"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-gray-400">
              Terms of Service
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-sm">
            &copy; {new Date().getFullYear()} QueryHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
