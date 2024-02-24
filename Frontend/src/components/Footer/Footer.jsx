import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
];
const quickLinks01 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-Doctor",
    Display: "Find aDoctor",
  },
  {
    path: "/",
    Display: "Request an appointment",
  },
  {
    path: "/",
    Display: "Find a Location",
  },
  {
    path: "/",
    Display: "Get a Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/",
    Display: "Donate",
  },

  {
    path: "/Contact",
    Display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row gap-[20px]">
          <div className="w-full md:w-2/5 flex flex-col items-center">
            <img src={logo} alt="" />
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <p className="display-[16px] leading-7 font-[400] text-textColor mt-4 text-center">
              Copyright @{year} developed by 
              Chandan Verma right reserved
            </p>
          </div>
          <div className="w-full md:w-1/5 flex flex-col items-center">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul className="flex flex-col items-center">
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/5 flex flex-col items-center">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul className="flex flex-col items-center">
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.Display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/5 flex flex-col items-center">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul className="flex flex-col items-center">
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.Display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
