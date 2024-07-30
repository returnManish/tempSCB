import React from 'react';
import { TextField, Grid, Paper } from '@mui/material';
import { MenuItem } from '@mui/material';

const PersonalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3 style={{ textAlign: "center", color: "GrayText", marginTop: "-20px" }}>
        Personal Details
      </h3>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name *"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="age"
              label="Age *"
              fullWidth
              value={formData.age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email *"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              label="Phone *"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="gender"
              label="Gender"
              fullWidth
              value={formData.gender}
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
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="marital_status"
              label="Marital Status"
              fullWidth
              value={formData.marital_status}
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
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Divorced">Divorced</MenuItem>
              <MenuItem value="Widowed">Widowed</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="education_level"
              label="Education Level *"
              fullWidth
              value={formData.education_level}
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
              <MenuItem value="High School">High School</MenuItem>
              <MenuItem value="Associate">Associate</MenuItem>
              <MenuItem value="Bachelor">Bachelor</MenuItem>
              <MenuItem value="Master">Master</MenuItem>
              <MenuItem value="PhD">PhD</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address (Optional)"
              fullWidth
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="num_dependents"
              label="Number of Dependents"
              fullWidth
              value={formData.num_dependents}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="employment_status"
              label="Employment Status"
              fullWidth
              value={formData.employment_status}
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
              <MenuItem value="Employed">Employed</MenuItem>
              <MenuItem value="Self-employed">Self-employed</MenuItem>
              <MenuItem value="Unemployed">Unemployed</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              <MenuItem value="Retired">Retired</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default PersonalDetails;
