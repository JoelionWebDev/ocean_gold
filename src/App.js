import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Home from "./home/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import Blogs from "./pages/blogs";
import Services from "./pages/Services";
import Footer from "./home/footer";
import Cover from "./cover";
import { Toaster } from "react-hot-toast";

import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <React.Fragment>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="Blogs" element={<Blogs />} /> */}
        <Route path="cover" element={<Cover />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
