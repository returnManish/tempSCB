import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Divider, CardHeader, Table, TableBody, TableCell, TableContainer, TableRow, Paper, IconButton, Tooltip, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import './Bonds.css';


const bonds = [
  {
    name: 'Government of India Savings Bond',
    interestRate: '7.75%',
    maturityAmount: 'INR 1,00,000',
    tenure: '7 Years',
    issuingAuthority: 'Government of India',
    rating: 'AA+',
    taxBenefit: 'Taxable',
  },
  {
    name: 'Reliance Industries Limited (RIL) Bonds',
    interestRate: '8.00%',
    maturityAmount: 'INR 1,00,000',
    tenure: '5 Years',
    issuingAuthority: 'Reliance Industries Limited',
    rating: 'AAA',
    taxBenefit: 'Taxable',
  },
  {
    name: 'Mumbai Municipal Corporation Bonds',
    interestRate: '7.50%',
    maturityAmount: 'INR 1,00,000',
    tenure: '10 Years',
    issuingAuthority: 'Mumbai Municipal Corporation',
    rating: 'AA',
    taxBenefit: 'Tax-free',
  },
];

function BondSection() {
  return (
    <Container>
      <Grid container spacing={3}>
        {bonds.map((bond, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <BondCard bond={bond} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function BondCard({ bond }) {
  return (
    <Card className='card-container'>
      <CardHeader
        title={bond.name}
        action={
          <Tooltip title="More Info">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        }
        titleTypographyProps={{ variant: 'h6' }}
        subheader={<Typography variant="body2">Interest Rate: {bond.interestRate}</Typography>}
      />
      <CardContent className='card-content'>
        {/* <Typography variant="body2" color="text.secondary">
          Maturity Amount: {bond.maturityAmount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tenure: {bond.tenure}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Issuing Authority: {bond.issuingAuthority}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {bond.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tax Benefit: {bond.taxBenefit}
        </Typography> */}
        <Divider style={{ margin: '10px 0' }} />
        <TableContainer component={Paper}>
          <Table size="small">
            <TableBody>
              {/* <TableRow>
                <TableCell>Interest Rate</TableCell>
                <TableCell align="right">{bond.interestRate}</TableCell>
              </TableRow> */}
              <TableRow>
                <TableCell>Maturity Amount</TableCell>
                <TableCell align="right">{bond.maturityAmount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tenure</TableCell>
                <TableCell align="right">{bond.tenure}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Issuing Authority</TableCell>
                <TableCell align="right">{bond.issuingAuthority}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rating</TableCell>
                <TableCell align="right">{bond.rating}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax Benefit</TableCell>
                <TableCell align="right">{bond.taxBenefit}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className='card-footer'>
        <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>
          View Details
        </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default BondSection;