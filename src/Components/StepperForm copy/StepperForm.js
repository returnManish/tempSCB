// src/App.js
import React, { useEffect, useState } from 'react';
import { Container, Stepper, Step, StepLabel, Button, Typography ,Paper,Box} from '@mui/material';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import InvestmentDetails from '../InvestmentDetails/InvestmentDetails';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import { getData ,postData,updateData} from '../ApiService/ApiService';

const steps = ['Personal Details', 'Investment Details', 'Review Details'];

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    salary: '',
    savings: '',
    salarySlip: null,
    financialRequirement: '',
    riskTolerance: 0,
    savingsPlan: '',
  });

  const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

  const fetchData = async () => {
    try {
      const data = await getData();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePost = async () => {
    try {
        console.log("formdata to be posted->" , formData);
      const newData = await postData(formData);
      setData([...data, newData]);
      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        occupation: '',
        annualIncome: '',
        salarySlip: null,
        employerAddress: '',
        financialRequirement: '',
        riskTolerance: 0,
      });
      console.log("data from api->" , data);
      console.log("fromdata afterpost in fronted->" , formData);

    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const updatedData = await updateData(id, formData);
      setData(data.map(item => (item.id === id ? updatedData : item)));
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      salary: '',
      savings: '',
      salarySlip: null,
      financialRequirement: '',
      riskTolerance: 0,
      savingsPlan: '',
    });
  };

  const handleFormDataChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <Container>
      <br />
      <h2 style={{ textAlign: "center", color: "GrayText" ,fontSize:"2rem"}}>
      Financial Advisor Form
      </h2>
      <br />
      <Box sx={{ width: "60vw", margin: "auto" }}>
        <Stepper color="success" activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step
              key={label}
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "green", // circle color (COMPLETED)
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                  {
                    color: "green", // Just text label (COMPLETED)
                  },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#0c77b9", // circle color (ACTIVE)
                },
                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                  {
                    color: "#0c77b9", // Just text label (ACTIVE)
                  },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "white", // circle's number (ACTIVE)
                },
                "& .css-1hv8oq8-MuiStepLabel-label":{
                    fontSize: "1rem",
                },
              }}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <br />


      <Paper
        elevation={5}
        style={{
          padding: "2vw",
          maxWidth: "60vw",
          display: "block",
          margin: "auto",
        }}
      >
      
          {activeStep === 0 && (
            <PersonalDetails formData={formData} setFormData={handleFormDataChange} />
          )}
          {activeStep === 1 && (
            <InvestmentDetails formData={formData} setFormData={handleFormDataChange} />
          )}
          {activeStep === 2 && <ReviewDetails formData={formData} />}
      </Paper>

         {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              style={{ marginLeft: 'auto' }}
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div> */}

          <div style={{ display: "flex", justifyContent: "center" ,margin:'30px'}}>
        {(
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            color="error"
            variant="contained"
          >
            Back
          </Button>
        )}
        &nbsp;&nbsp;
        {activeStep < 2 && (
          <Button
            onClick={handleNext}
            color="primary"
            variant="contained"
          >
            Next
          </Button>
        )}
        {activeStep === 2 && (
          <Button
            color="success"
            variant="contained"
            onClick={handlePost}
          >
            Submit
          </Button>
        )}
      </div>
      
    </Container>
    
  );
}

export default StepperForm;
