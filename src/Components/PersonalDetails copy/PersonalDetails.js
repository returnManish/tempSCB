// src/PersonalDetails.js
import React from 'react';
import { TextField, Grid , Paper } from '@mui/material';

const PersonalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    <>
    <h3 style={{textAlign:"center"  , color: "GrayText", marginTop:"-20px"}}>
    Personal Details
    </h3>
    <Paper elevation={3} style={{ padding: '20px' }}>
      
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          name="name"
          label="Name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="age"
          label="Age"
          fullWidth
          value={formData.age}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="email"
          label="Email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="phone"
          label="Phone"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
    </Paper>
    </>
  );
};

export default PersonalDetails;
