import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import StepperForm from './Components/StepperForm/StepperForm';
import FidelityResults from './Components/Results/FidelityResults';
import FundPage from './Components/InvestmentPlans/FundPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/financialDetails' element={<StepperForm />} />
            <Route path='/resultPage' element={<FidelityResults />} />
            <Route path='/fundPage' element={<FundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;