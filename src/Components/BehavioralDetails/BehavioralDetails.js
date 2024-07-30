// src/BehavioralDetails/BehavioralDetails.js
import React from 'react';
import { TextField, Grid, Paper } from '@mui/material';
import { MenuItem } from '@mui/material';

const BehavioralDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3 style={{ textAlign: "center", color: "GrayText", marginTop: "-20px" }}>
        Behavioral Details
      </h3>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="spendingHabit"
              label="Spending Habit"
              fullWidth
              value={formData.spendingHabit}
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
              <MenuItem value="Frugal">Frugal</MenuItem>
              <MenuItem value="Moderate">Moderate</MenuItem>
              <MenuItem value="Extravagant">Extravagant</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="savingHabit"
              label="Saving Habit"
              fullWidth
              value={formData.savingHabit}
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
              <MenuItem value="Regular">Regular</MenuItem>
              <MenuItem value="Irregular">Irregular</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="financialLiteracy"
              label="Financial Literacy"
              fullWidth
              value={formData.financialLiteracy}
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
        </Grid>
      </Paper>
    </>
  );
};

export default BehavioralDetails;
