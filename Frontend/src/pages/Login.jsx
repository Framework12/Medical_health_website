import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiconfig from "../helpers/api";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate =useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit=async(e)=>{
   e.preventDefault()
    const data = await axios.post(`${apiconfig}/api/v1/auth/login`,{
      ...formData
    })
    console.log(data)
    if(data?.data?.success){
      console.log("inside")
      Cookies.set('token',data?.data?.token)
      Cookies.set('isUserAuth','true')
      Cookies.set("userData",JSON.stringify(data?.data))
      navigate('/')
    }
  }


  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> back
        </h3>
        <form className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 "
              onClick={(e)=>handleSubmit(e)}
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            don&apos;t have an account?
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
