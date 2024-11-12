import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-[3rem] bg-black text-white gap-[2rem]">
      {/* company info */}
      <div className="flex justify-evenly gap-[5rem]">
        <div className="flex flex-col gap-4 items-start p-2">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" className="invert w-8" />
            <h1 className="font-serif font-extrabold text-xl">Canvix</h1>
          </div>
          <div>
            <p className="text-white">
              We’re a team of strategic creator and <br /> digital innovator,
              united focus in our <br /> pursuit of mastery and joyful.
            </p>
          </div>
        </div>
        <div className="flex gap-[3rem]">
          <div>
            <h1 className="font-bold font-serif text-lg mb-2">Pages</h1>
            <ul className="flex flex-col gap-1 font-thin">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home 2</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio Single</Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h1 className="font-bold font-serif text-lg mb-2">
                Utility Pages
              </h1>
              <ul className="flex flex-col gap-1 font-thin">
                <li>
                  <Link to="/">Style Guide</Link>
                </li>
                <li>
                  <Link to="/">Instructions</Link>
                </li>
                <li>
                  <Link to="/">License</Link>
                </li>
                <li>
                  <Link to="/">Changelog</Link>
                </li>
                <li>
                  <Link to="/">Error 404</Link>
                </li>
                <li>
                  <Link to="/">Password Protected</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-serif font-extrabold text-lg">Subscribe</h1>
          <input
            type="text"
            className="bg-white rounded-full p-3 w-[21rem] text-black"
            placeholder="Enter your email here"
          />
          <button className="bg-black rounded-full relative bottom-[3.25rem] left-48 w-[8rem] p-2">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="bg-white border-white border-1 w-full" />
      {/* contact details */}
      <div className="flex justify-between gap-20 sm:py-4">
        <div className="flex flex-col">
          <h1 className="font-serif font-extrabold text-sm">Copyright by</h1>
          <h1 className="font-thin">Designed by fce team-1</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="font-serif font-extrabold text-sm">Contact Us</h1>
          <h1 className="font-thin">+0 12 457 4578</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="font-serif font-extrabold text-sm">Address</h1>
          <h1 className="font-thin">119 Tanglewood Lane Gulfport, MS 39503</h1>
        </div>
        <div className="flex gap-2">
          <img
            src={facebook}
            alt="facebook"
            className="invert w-[2rem] h-[2rem]"
          />
          <img
            src={instagram}
            alt="instagram"
            className="invert w-[2rem] h-[2rem]"
          />
          <img
            src={linkedin}
            alt="linkedin"
            className="invert w-[2rem] h-[2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
