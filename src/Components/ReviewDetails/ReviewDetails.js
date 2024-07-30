// src/ReviewDetails/ReviewDetails.js
import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const ReviewDetails = ({ formData }) => {
  return (
    <>
      <h3 style={{ textAlign: "center", color: "GrayText", marginTop: "-20px" }}>
        Review Details
      </h3>
      <Paper elevation={3} style={{ padding: '20px' }}>
        
        <Typography variant='h6' style={{ textAlign: "center", color: "green", fontWeight: 'bold' }}>Personal Details - </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography>Name: {formData.name}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Age: {formData.age}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Email: {formData.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Phone: {formData.phone}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Gender: {formData.gender}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Marital Status: {formData.maritalStatus}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Education Level: {formData.educationLevel}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Address: {formData.address}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Number of Dependents: {formData.numDependents}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Employment Status: {formData.employmentStatus}</Typography>
          </Grid>
        </Grid>

        <Typography variant='h6' style={{ textAlign: "center", color: "green", fontWeight: 'bold' }}>Investment Details - </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography>Investment Portfolio: {formData.investmentPortfolio}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Risk Tolerance: {formData.riskTolerance}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Investment Goal: {formData.investmentGoal}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Investment Frequency: {formData.investmentFrequency}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Investment Preferences: {formData.investmentPreferences}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Investment Value: {formData.investmentValue}</Typography>
          </Grid>
        </Grid>
    
        <Typography variant='h6' style={{ textAlign: "center", color: "green", fontWeight: 'bold' }}>Financial Details - </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography>Income: {formData.income}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Expenses: {formData.expenses}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Assets: {formData.assets}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Liabilities: {formData.liabilities}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Credit Score: {formData.creditScore}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Monthly Savings: {formData.monthlySavings}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Monthly Spending: {formData.monthlySpending}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Number of Transactions: {formData.numTransactions}</Typography>
          </Grid>
        </Grid>

        <Typography variant='h6' style={{ textAlign: "center", color: "green", fontWeight: 'bold' }}>Behavioral Details - </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography>Spending Habit: {formData.spendingHabit}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Saving Habit: {formData.savingHabit}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Financial Literacy: {formData.financialLiteracy}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ReviewDetails;
