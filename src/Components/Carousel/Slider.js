import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Paper } from "@mui/material";
import '../Home/Home.css';

function Slider() {
  return (
    <Carousel data-bs-theme="dark" controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://av.sc.com/in/content/images/in-homeloan-mainpage-desktop-banner.jpg"
          alt="First slide"
          style={{ height: "600px" }} // Increase height here
        />
        <Carousel.Caption>
          <Paper className="carousel-paper">
            <div className="carousel-content">
              <h2>You've got goals. We've got solutions.</h2>
              <div className="text-section">
                <h2>Invest today and plan for tomorrow</h2>
                <p>We can help you get started.</p>
                <div className="buttons">
                  <button className="open-account">Start Here</button>
                </div>
              </div>
            </div>
          </Paper>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
