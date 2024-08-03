import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Container,
  CssBaseline,
  TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FidelityResults = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/fundPage');
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // Add your feedback submission logic here
    alert('Feedback submitted!');
  };



  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box sx={{ marginTop: 4, textAlign: 'center', color: '#333' }}>
        <img
          src="https://digital.fidelity.com" // Replace with the actual logo URL
          alt="Fidelity"
          style={{ width: '150px', marginBottom: '20px' }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Your Results
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, fontSize: '1.1rem' }}>
          Based on what you shared with us, here are some investment recommendations we found for you.
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6" component="h2" sx={{ textAlign: 'left', marginBottom: 2 }}>
            Closest Match
          </Typography>
          <Card variant="outlined" sx={{ marginBottom: 3, backgroundColor: '#e3f2fd', borderRadius: '8px', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" component="h2">
                Our Recommendation
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, lineHeight: '1.6' }}>
                {'Our full-featured brokerage account has no account fees and no minimums to open. You can trade US stocks, exchange-traded funds (ETFs), and options online for $0 commissions*. Click on Learn More to check out the various options available for investment.'}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3, marginTop: 1 }}>
                <Button href="#" sx={{ color: 'blue', textDecoration: 'underline' }}>
                  How did we determine this?
                </Button>
                <Button variant="contained" color="primary" href="#" sx={{ borderRadius: '20px', marginLeft: 2 }} onClick={handleClick}>
                  Learn more
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Typography component="h2" sx={{ textAlign: 'left', marginBottom: 2 }}>
            We Value Your Feedback
          </Typography>
          <Card variant="outlined" sx={{ backgroundColor: '#f5f5f5', borderRadius: '8px', padding: 2 }}>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Your Feedback"
                  multiline
                  rows={2}
                  required
                  sx={{ marginBottom: 2 }}
                />
                <Box sx={{ textAlign: 'right' }}>
                  <Button variant="contained" color="primary" type="submit" sx={{ borderRadius: '20px' }}>
                    Submit
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default FidelityResults;