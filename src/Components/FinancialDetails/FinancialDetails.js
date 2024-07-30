// src/FinancialDetails/FinancialDetails.js
import React from 'react';
import { TextField, Grid, Paper } from '@mui/material';

const FinancialDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3 style={{ textAlign: "center", color: "GrayText", marginTop: "-20px" }}>
        Financial Details
      </h3>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="income"
              label="Income *"
              fullWidth
              value={formData.income}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="expenses"
              label="Expenses *"
              fullWidth
              value={formData.expenses}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="assets"
              label="Assets *"
              fullWidth
              value={formData.assets}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="liabilities"
              label="Liabilities *"
              fullWidth
              value={formData.liabilities}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="creditScore"
              label="Credit Score"
              fullWidth
              value={formData.creditScore}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="monthlySavings"
              label="Monthly Savings *"
              fullWidth
              value={formData.monthlySavings}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="monthlySpending"
              label="Monthly Spending *"
              fullWidth
              value={formData.monthlySpending}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="numTransactions"
              label="Number of Transactions"
              fullWidth
              value={formData.numTransactions}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default FinancialDetails;
