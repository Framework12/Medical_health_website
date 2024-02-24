import { useState } from "react";
import { doctors } from "../../assets/data/doctors";
import Testimonial from "../../components/Testonomial/Testomomial";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
  const [searchData,setSearchData] = useState("")
  const [searchDoctors,setSearchDoctors] = useState([])
 

  const handleSearch =()=>{
  
  setSearchDoctors(doctors.filter((doctor)=>doctor.specialization.toLowerCase().includes(searchData.toLowerCase())))
     }
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading"> Find a Doctor </h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
              onChange={(e)=>setSearchData(e.target.value)}
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {searchDoctors.length>0?searchDoctors?.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            )):
             doctors?.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
            }
            
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our Patient say</h2>
            <p className="text-para text-center">
              World-class care for Everyone.our health system offers unmatched,
              expert health care
            </p>
          </div>
          <Testimonial></Testimonial>
        </div>
      </section>
    </>
  );
};

export default Doctors;
