import "./App.css";

import Navbar from "./Navbar";
import Home from "./home/Home";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import { Route, Routes } from "react-router-dom";
import Services from "./Services";
import ServiceDetail from "./ServiceDetail";
import Appointment from "./Appointment";
import Therapist from "./Therapist";
import FAQ from "./FAQ";
import Error from "./Error";
import Blog from "./Blog";
import BlogSinglePost from "./BlogSinglePost";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicedetail" element={<ServiceDetail />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/therapist" element={<Therapist />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/error" element={<Error />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/singlepost" element={<BlogSinglePost />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
