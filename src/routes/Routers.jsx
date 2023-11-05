import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctor/Doctors";
import DoctorsDetails from "../pages/Doctor/DoctorDetails";
// import { doctors } from "../asserts/data/doctorData";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
   // const [doc] = doctors
   //    .filter((doc) => doc.id === 3)
   //    .map((doctor) => doctor.id);

   return (
      <div>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='doctors' element={<Doctors />} />
            <Route path='/doctors/:id' element={<DoctorsDetails id={"1"} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
         </Routes>
      </div>
   );
};

export default Routers;
