import React from "react";
import { Container, Grid, Card, CardContent, Typography, Divider, CardHeader, IconButton, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Button } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const mutualFunds = [
  {
    name: "Invesco India Contra Fund - Direct Plan - Growth",
    expenseRatio: "0.54%",
    nav: "INR 82.34",
    returns: {
      oneYear: "51.46%",
      threeYears: "24.12%",
      fiveYears: "25.47%",
      sinceInception: "20.64%",
    },
  },
  {
    name: "SBI Long Term Equity Fund - Direct Plan - Growth",
    expenseRatio: "0.93%",
    nav: "INR 472.96",
    returns: {
      oneYear: "56.86%",
      threeYears: "29.85%",
      fiveYears: "26.94%",
      sinceInception: "18.23%",
    },
  },
  {
    name: "HDFC Focused 30 Fund - Direct Plan - Growth",
    expenseRatio: "0.81%",
    nav: "INR 142.75",
    returns: {
      oneYear: "32.75%",
      threeYears: "23.48%",
      fiveYears: "20.87%",
      sinceInception: "18.50%",
    },
  },
  // Uncomment if needed
  // {
  //   name: "JM Large Cap Fund - (Direct) - Growth",
  //   expenseRatio: "1.25%",
  //   nav: "INR 77.54",
  //   returns: {
  //     oneYear: "27.35%",
  //     threeYears: "18.25%",
  //     fiveYears: "15.62%",
  //     sinceInception: "12.47%",
  //   },
  //},
];

function MutualFundSection() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Mutual Fund Suggestions
      </Typography>
      <Grid container spacing={3}>
        {mutualFunds.map((fund, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <FundCard fund={fund} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function FundCard({ fund }) {
  return (
    <Card>
      <CardHeader
        title={fund.name}
        action={
          <IconButton>
            <InfoIcon />
          </IconButton>
        }
        titleTypographyProps={{ variant: 'h6' }}
        subheader={<Typography variant="body2">Expense Ratio: {fund.expenseRatio}</Typography>}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          NAV: {fund.nav}
        </Typography>
        <Divider style={{ margin: "10px 0" }} />
        <Typography variant="body2" color="text.secondary">
          Returns:
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableBody>
              {Object.entries(fund.returns).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell>{capitalizeFirstLetter(key)}</TableCell>
                  <TableCell align="right">{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default MutualFundSection;