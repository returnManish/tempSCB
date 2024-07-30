// src/App.js
import React, { useState } from 'react';
import { Container, Stepper, Step, StepLabel, Button, Typography, Paper, Box } from '@mui/material';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import InvestmentDetails from '../InvestmentDetails/InvestmentDetails';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import FinancialDetails from '../FinancialDetails/FinancialDetails';
import BehavioralDetails from '../BehavioralDetails/BehavioralDetails';
import { getData, postData, updateData } from '../ApiService/ApiService';
import Alert from '../Alert/CustomizedAlert';

const steps = ['Personal Details', 'Investment Details', 'Financial Details', 'Behavioral Details', 'Review Details'];

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
    riskTolerance: '',
    savingsPlan: '',
    investmentPortfolio: '',
    investmentGoal: '',
    investmentFrequency: '',
    investmentPreferences: '',
    investmentValue: '',
    income: '',
    expenses: '',
    assets: '',
    liabilities: '',
    creditScore: '',
    monthlySavings: '',
    monthlySpending: '',
    numTransactions: '',
    spendingHabit: '',
    savingHabit: '',
    financialLiteracy: '',
    gender: '',
    marital_status: '',
    education_level: '',
    address: '',
    numDependents: '',
    employmentStatus: '',
  });

  const [data, setData] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState("");

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
      console.log("formdata to be posted->", formData);
      const newData = await postData(formData);
      setData([...data, newData]);
      setSeverity("success");
      setAlertMessage("Details submitted successfully..");
      setOpenAlert(true);

      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        salary: '',
        savings: '',
        salarySlip: null,
        financialRequirement: '',
        riskTolerance: '',
        savingsPlan: '',
        investmentPortfolio: '',
        investmentGoal: '',
        investmentFrequency: '',
        investmentPreferences: '',
        investmentValue: '',
        income: '',
        expenses: '',
        assets: '',
        liabilities: '',
        creditScore: '',
        monthlySavings: '',
        monthlySpending: '',
        numTransactions: '',
        spendingHabit: '',
        savingHabit: '',
        financialLiteracy: '',
        gender: '',
        marital_status: '',
        education_level: '',
        address: '',
        numDependents: '',
        employmentStatus: '',
      });
      console.log("data from api->", data);
      console.log("formdata after post in frontend->", formData);

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
    if(activeStep === 0){
      if (
        formData.name === "" ||
        formData.age === "" ||
        formData.email=== "" ||
        formData.phone=== "" ||
        formData.education_level== ""
      ) {
        console.log(formData);
        setSeverity("error");
        setAlertMessage("Please fill all the required fields");
        setOpenAlert(true);
        return;
      }
    }

    if(activeStep === 1){
      if (
        formData.riskTolerance === "" ||
        formData.investmentGoal === "" ||
        formData.investmentValue=== "" 
      ) {
        console.log(formData);
        setSeverity("error");
        setAlertMessage("Please fill all the required fields");
        setOpenAlert(true);
        return;
      }
    }

    if(activeStep === 2){
      if (
        formData.income === "" ||
        formData.assets === "" ||
        formData.liabilities=== ""||
        formData.expenses === "" ||
        formData.monthlySavings === "" ||
        formData.monthlySpending=== "" 
      ) {
        console.log(formData);
        setSeverity("error");
        setAlertMessage("Please fill all the required fields");
        setOpenAlert(true);
        return;
      }
    }

    // if(activeStep === 3){
    //   if (
    //     applicationForm.current_occupation === "" ||
    //     applicationForm.annual_income === "" ||
    //     applicationForm.employer_address === "" ||
    //     !salaryFile
    //   ) {
    //     console.log(applicationForm);
    //     setSeverity("error");
    //     setAlertMessage("Please fill all the required fields");
    //     setOpenAlert(true);
    //     return;
    //   }
    // }
     
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
      riskTolerance: '',
      savingsPlan: '',
      investmentPortfolio: '',
      investmentGoal: '',
      investmentFrequency: '',
      investmentPreferences: '',
      investmentValue: '',
      income: '',
      expenses: '',
      assets: '',
      liabilities: '',
      creditScore: '',
      monthlySavings: '',
      monthlySpending: '',
      numTransactions: '',
      spendingHabit: '',
      savingHabit: '',
      financialLiteracy: '',
      gender: '',
      marital_status: '',
      education_level: '',
      address: '',
      numDependents: '',
      employmentStatus: '',
    });
  };

  const handleFormDataChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <>

      <Alert
        openAlert={openAlert}
        alertMessage={alertMessage}
        setOpenAlert={setOpenAlert}
        severity={severity}
      />

      <Container>
        <br />
        <h2 style={{ textAlign: "center", color: "GrayText", fontSize: "2rem" }}>
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
                  "& .css-1hv8oq8-MuiStepLabel-label": {
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
            overflowY: activeStep === 4 ? 'auto' : 'visible', // Add scrollbar for Review Details
            maxHeight: activeStep === 4 ? '30rem' : '', // Limit height for scrollbar
          }}
        >
          {activeStep === 0 && (
            <PersonalDetails formData={formData} setFormData={handleFormDataChange} />
          )}
          {activeStep === 1 && (
            <InvestmentDetails formData={formData} setFormData={handleFormDataChange} />
          )}
          {activeStep === 2 && (
            <FinancialDetails formData={formData} setFormData={handleFormDataChange} />
          )}
          {activeStep === 3 && (
            <BehavioralDetails formData={formData} setFormData={handleFormDataChange} />
          )}
          {activeStep === 4 && (
            <ReviewDetails formData={formData} />
          )}
        </Paper>

        <div style={{ display: "flex", justifyContent: "center", margin: '30px' }}>
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
          {activeStep < 4 && (
            <Button
              onClick={handleNext}
              color="primary"
              variant="contained"
            >
              Next
            </Button>
          )}
          {activeStep === 4 && (
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
    </>
  );
}

export default StepperForm;
