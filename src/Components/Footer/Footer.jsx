import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../Images/logo_scb2.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img className="logo" src={logo} alt="Logo" />
          <ul className="footer-list">
            <li>Accessibility</li>
            <li>Privacy</li>
          </ul>
          <ul className="footer-list">
            <li>Cookie Policy</li>
            <li>Terms of Use</li>
          </ul>
          <ul className="footer-list">
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-right">
          <FacebookIcon className="social-icon" />
          <InstagramIcon className="social-icon" />
          <LinkedInIcon className="social-icon" />
          <TwitterIcon className="social-icon" />
          <YouTubeIcon className="social-icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
