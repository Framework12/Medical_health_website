import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import userimg from "../../assets/images/userIcon.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import Cookies from "js-cookie";
import { AiOutlineClose } from "react-icons/ai";
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "services",
  },
  {
    path: "/contact",
    display: "contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const auth = Cookies.get('isUserAuth')
  const [mobileMenu,setMobileMenu]= useState(false)
  const navigate = useNavigate()

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop ||
        document > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });


  const handleLogout = ()=>{
    console.log("inside")
    Cookies.set('token','')
    Cookies.set('isUserAuth','false')
    Cookies.set("userData",'')
    navigate('/')
  }

  const togglemenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between hidden md:flex">
          {/* ======logo====== */}
          <div>
            <img src={logo} />
          </div>
          {/* ======menu====== */}
          <div className="navigation" ref={menuRef}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* -----------nav rigth--------- */}
          <div className=" flex items-center gap-4 ">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={userimg} className="w-full rounded-full" />
                </figure>
              </Link>
            </div>
            {
              auth=='true'?
            // <Link to="/logout">
              <button className="bg-primaryColor py-2 px-6 text-white font[600] h-[44px] flex items-center  justify-center rounded-[50px]" onClick={handleLogout}>
                Logout
              </button>
            // {/* </Link> */}
            :
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font[600] h-[44px] flex items-center  justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            }
          </div>
        </div>
        <div className="flex items-center justify-between md:hidden relative">
          <div>
            <img src={logo} />
          </div>
            <span className="md:hidden" onClick={()=>setMobileMenu(true)}>
              <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
            </span>
            <div className={`absolute ${mobileMenu?"top-0":"-top-[800%]"} bg-white w-full z-[100]`}>
              <AiOutlineClose size={20} className="" onClick={()=>setMobileMenu(false)}/>
            <div className="navigation">
            <ul className="menu flex flex-col items-center gap-[1.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-2 font-[600]"
                        : "text-textColor text-[16px] leading-2 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
