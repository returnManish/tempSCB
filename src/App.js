import logo from './logo.svg';
import './App.css';
import StepperForm from './Components/StepperForm/StepperForm';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <StepperForm/> */}
      <Footer/>
    </div>
  );
}

export default App;
