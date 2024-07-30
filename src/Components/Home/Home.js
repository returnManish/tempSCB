import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
// import financeImage from '../assets/finance_image.png';
import scbLogo from '../Images/logo_scb1.png'
import Slider from '../Carousel/Slider';

const Home = () => {
  return (
    <div>
      <Navbar/>
     

      {/* <div className="second-section">
        <div className="text-side">
          <h3>Spending & Saving</h3>
          <p>Do more with your money</p>
          <p>Fidelity cash management products help you spend and save smarter so you can reach your goals.</p>
          <button className="start-managing">Start managing your cash</button>
        </div>
        <div className="image-side">
          <img src={scbLogo} alt="Spending and Saving" className="rounded-image" />
        </div>
      </div> */}


      <Slider/>
    </div>
  );
}

export default Home;
