import React, { useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";


function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <Navbar
        toggle={toggle}
        setToggle={setToggle}
      ></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experience></Experience>
      <Works></Works>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
