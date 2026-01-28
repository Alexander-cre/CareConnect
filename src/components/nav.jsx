import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setIsOpen(false); // close mobile menu when scrolled back up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="lg:px-16 px-2 flex flex-wrap items-center py-2">
        <div className="flex-1 flex justify-between items-center">
          <Link to="/" className="text-xl text-black font-semibold">
            CareConnect
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden block"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li><Link className="md:p-4 py-3 px-0 block text-black" to="/about">AboutUs</Link></li>
              <li><Link className="md:p-4 py-3 px-0 block text-black" to="/find-a-doc">Find a Doc</Link></li>
              <li><Link className="md:p-4 py-3 px-0 block text-black" to="/blog">Blog</Link></li>
              <li><Link className="md:p-4 py-3 px-0 block md:mb-0 mb-2 text-black" to="/">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white mobilenav transform transition-transform duration-300 ease-in-out z-50 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="p-2 text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <nav className="bg-white mobilenavmenu shadow-lg">
          <ul className="flex flex-col text-gray-700 mt-4 space-y-4 px-6">
            <li><Link className="block text-black" to="/about">AboutUs</Link></li>
            <li><Link className="block text-black" to="/find-a-doc">Find a Doc</Link></li>
            <li><Link className="block text-black" to="/blog">Blog</Link></li>
            <li><Link className="block text-black" to="/">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
