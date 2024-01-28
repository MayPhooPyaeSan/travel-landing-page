import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Booking from "./components/Booking";
import Testimonial from "./components/Testimonial";
import Advertise from "./components/Advertise";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <Booking />
      <Testimonial />
      <Advertise />
      <Footer />
    </div>
  );
}

export default App;
