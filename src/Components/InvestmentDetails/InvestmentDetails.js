// src/InvestmentDetails/InvestmentDetails.js
import React from 'react';
import { TextField, Grid, Paper } from '@mui/material';
import { MenuItem } from '@mui/material';

const InvestmentDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3 style={{ textAlign: "center", color: "GrayText", marginTop: "-20px" }}>
        Investment Details
      </h3>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="investmentPortfolio"
              label="Investment Portfolio"
              fullWidth
              value={formData.investmentPortfolio}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      '& .Mui-selected': { backgroundColor: 'blue' }
                    }
                  }
                }
              }}
            >
              <MenuItem value="Stocks">Stocks</MenuItem>
              <MenuItem value="Bonds">Bonds</MenuItem>
              <MenuItem value="Mutual Funds">Mutual Funds</MenuItem>
              <MenuItem value="Real Estate">Real Estate</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="riskTolerance"
              label="Risk Tolerance *"
              fullWidth
              value={formData.riskTolerance}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      '& .Mui-selected': { backgroundColor: 'blue' }
                    }
                  }
                }
              }}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="investmentGoal"
              label="Investment Goal *"
              fullWidth
              value={formData.investmentGoal}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      '& .Mui-selected': { backgroundColor: 'blue' }
                    }
                  }
                }
              }}
            >
              <MenuItem value="Retirement">Retirement</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Emergency Fund">Emergency Fund</MenuItem>
              <MenuItem value="Wealth Accumulation">Wealth Accumulation</MenuItem>
              <MenuItem value="Short-term Savings">Short-term Savings</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="investmentFrequency"
              label="Investment Frequency"
              fullWidth
              value={formData.investmentFrequency}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      '& .Mui-selected': { backgroundColor: 'blue' }
                    }
                  }
                }
              }}
            >
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Quarterly">Quarterly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="investmentPreferences"
              label="Investment Preferences"
              fullWidth
              value={formData.investmentPreferences}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      '& .Mui-selected': { backgroundColor: 'blue' }
                    }
                  }
                }
              }}
            >
              <MenuItem value="Conservative">Conservative</MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Real Estate">Real Estate</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
              <MenuItem value="Energy">Energy</MenuItem>
              <MenuItem value="Utilities">Utilities</MenuItem>
              <MenuItem value="Consumer Goods">Consumer Goods</MenuItem>
              <MenuItem value="Financial Services">Financial Services</MenuItem>
              <MenuItem value="Communication Services">Communication Services</MenuItem>
              <MenuItem value="Industrial">Industrial</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="investmentValue"
              label="Investment Value *"
              fullWidth
              value={formData.investmentValue}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default InvestmentDetails;
