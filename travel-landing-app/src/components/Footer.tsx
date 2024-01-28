import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-div">
      <div>
        <h4>Asia Highlights</h4>
        <p>Best Travel Angency In Myanmar.</p>
      </div>
      <div>
        <h3>Company</h3>
        <p style={{ marginTop: "1rem" }}>Home</p>
        <p style={{ marginTop: "0.5rem" }}>About</p>
        <p style={{ marginTop: "0.5rem" }}>Services</p>
      </div>
      <div>
        <h3>Contact</h3>
        <p style={{ marginTop: "1rem" }}>Help/FQA</p>
        <p style={{ marginTop: "0.5rem" }}> Terms and Services</p>
        <p style={{ marginTop: "0.5rem" }}>Privacy</p>
      </div>
      <div>
        <h3>More</h3>
        <p style={{ marginTop: "1rem" }}>
          {" "}
          <FaFacebook /> <FaInstagram /> <FaLinkedin />
        </p>

        <p style={{ marginTop: "0.5rem" }}>Address: Chan Aye Thar San (MDY)</p>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
