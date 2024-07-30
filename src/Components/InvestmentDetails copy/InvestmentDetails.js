// src/InvestmentDetails.js
import React from 'react';
import { TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Slider, Input, Button,Paper , InputLabel, MenuItem, Select} from '@mui/material';
import {Typography} from '@mui/material';

const InvestmentDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  const handleSliderChange = (e, newValue) => {
    setFormData({ riskTolerance: newValue });
  };

  const handleFileChange = (e) => {
    setFormData({ salarySlip: e.target.files[0] });
  };

  return (
    <>
    <h3 style={{textAlign:"center"  , color: "GrayText" ,marginTop:"-20px"}}>
    Investment Details
    </h3>
    <Paper elevation={3} style={{ padding: '20px' }}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          name="salary"
          label="Salary"
          fullWidth
          value={formData.salary}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          name="savings"
          label="Savings"
          fullWidth
          value={formData.savings}
          onChange={handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <FormLabel component="legend">Financial Requirement</FormLabel>
        <InputLabel id="financial-requirement-label" sx={{fontSize:'0.01rem'}}>Financial Requirement</InputLabel>
        <Select
          labelId="financial-requirement-label"
          name="financialRequirement"
          value={formData.financialRequirement}
          onChange={handleChange}
        >
          <MenuItem value="education">Education</MenuItem>
          <MenuItem value="retirement">Retirement</MenuItem>
          <MenuItem value="home">Home</MenuItem>
          <MenuItem value="marriage">Marriage</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </Select>
      </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Savings Plan</FormLabel>
          <RadioGroup
            name="savingsPlan"
            value={formData.savingsPlan}
            onChange={handleChange}
          >
            <FormControlLabel value="short-term" control={<Radio />} label="Short-term" />
            <FormControlLabel value="long-term" control={<Radio />} label="Long-term" />
          </RadioGroup>
        </FormControl>
      </Grid>

      
      <Grid item xs={12} sm={6}>
        <FormLabel component="legend">Risk Tolerance</FormLabel>
        <Slider
          value={formData.riskTolerance}
          onChange={handleSliderChange}
          aria-labelledby="risk-tolerance-slider"
          step={1}
          marks
          min={0}
          max={10}
        />
        <Input
          value={formData.riskTolerance}
          margin="dense"
          onChange={handleChange}
          inputProps={{
            step: 1,
            min: 0,
            max: 10,
            type: 'number',
            'aria-labelledby': 'risk-tolerance-slider',
          }}
        />
      </Grid>
    
      <Grid item xs={12} sm={6}>
        <Button variant="contained" component="label">
          Upload Salary Slip (Optional)
          <input type="file" hidden onChange={handleFileChange} />
        </Button>

        {formData.salarySlip && <div>{formData.salarySlip.name}</div>}
      </Grid>

    </Grid>
</Paper>
</>
  );
};

export default InvestmentDetails;
