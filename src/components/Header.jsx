// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     <div className="flex justify-around items-center p-4 w-full bg-black">
//       <div className="flex gap-2 items-center">
//         <img src={logo} alt="logo" className="invert w-7" />
//         <h1 className="font-serif font-extrabold text-white text-xl">Canvix</h1>
//       </div>

//       {/* Navigation menu */}
//       <div className="hidden md:flex p-2">
//         <ul className="flex justify-between items-center gap-4 text-white font-thin">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </ul>
//       </div>

//       {/* Get in touch button */}
//       <div className="bg-white rounded-full px-3 py-1 hidden md:block">
//         <Link to="/projectdetails">
//           <button>Get in touch</button>
//         </Link>
//       </div>

//       {/* Mobile menu icon */}
//       <div className="block md:hidden">
//         <button className="text-white">
//           {/* Icon for mobile menu */}
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 w-full bg-black">
      {/* Logo Section */}
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="invert w-7" />
        <h1 className="font-serif font-extrabold text-white text-xl">Canvix</h1>
      </div>

      {/* Navigation menu for desktop */}
      <div className="hidden md:flex p-2">
        <ul className="flex justify-between items-center gap-4 text-white font-thin">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Get in touch button for desktop */}
      <div className="bg-white rounded-full px-3 py-1 hidden md:block">
        <Link to="/projectdetails">
          <button>Get in touch</button>
        </Link>
      </div>

      {/* Mobile menu icon */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-white font-thin">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/projectdetails" onClick={() => setIsMenuOpen(false)}>
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
