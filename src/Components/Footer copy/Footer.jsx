import React from "react";
//import home from "../Images/home.png";
import "./Footer.css";
//import logo from "../Images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../Images/logo_scb2.png";
function Footer() {
  return (
    <footer className="footer">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "1vw" }} className="col-12 col-md-4">
          <img
            className="logo"
            src={logo}
            alt=""
            style={{ height: "2.5vw", marginLeft: "2vw" }}
          />

          <div
            className="row"
            style={{ maxWidth: "30vw", listStyle: "none", margin: "1vw" }}
          >
            <li className="col-12 col-md-6 footer-list">Accessibility</li>
            <li className="col-12 col-md-6 footer-list">Cookie Policy</li>
            <li className="col-12 col-md-6 footer-list">Privacy</li>
            <li className="col-12 col-md-6 footer-list">Terms of use</li>
            <li className="col-12 col-md-6 footer-list">Our Locations</li>
            <li className="col-12 col-md-6 footer-list">Contact Us</li>
            <li className="col-12 col-md-6 footer-list">FAQs</li>
            <li className="col-12 col-md-6 footer-list">Manage Cookies</li>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
