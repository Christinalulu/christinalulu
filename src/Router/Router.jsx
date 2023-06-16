import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";

function Router() {
   return(
      <>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/profile" element={<Profile/>}/>

      </Routes>
      
      
      </>

   )
}
export default Router;