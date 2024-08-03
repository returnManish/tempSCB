import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Divider, CardHeader, Table, TableBody, TableCell, TableContainer, TableRow, Paper, IconButton , Button} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const stocks = [
  {
    name: 'Asian Paints',
    currentPrice: 'INR 3,098.00',
    previousClose: 'INR 3,005.05',
    high: 'INR 3,077.20',
    low: 'INR 3,005.05',
    change: '72.15',
    percentChange: '2.40%',
  },
  {
    name: 'JSW Steel',
    currentPrice: 'INR 919.50',
    previousClose: 'INR 902.70',
    high: 'INR 918.50',
    low: 'INR 902.10',
    change: '16.40',
    percentChange: '1.82%',
  },
  {
    name: 'Adani Ports',
    currentPrice: 'INR 1,575.00',
    previousClose: 'INR 1,547.00',
    high: 'INR 1,572.60',
    low: 'INR 1,546.25',
    change: '26.35',
    percentChange: '1.70%',
  },
];

function StockSection() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Variable Return Stocks
      </Typography>
      <Grid container spacing={3}>
        {stocks.map((stock, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <StockCard stock={stock} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function StockCard({ stock }) {
  return (
    <Card>
      <CardHeader
        title={stock.name}
        action={
          <IconButton>
            <InfoIcon />
          </IconButton>
        }
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Current Price: {stock.currentPrice}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Previous Close: {stock.previousClose}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          High: {stock.high}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Low: {stock.low}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Change: {stock.change}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Percent Change: {stock.percentChange}
        </Typography>
        <Divider style={{ margin: '10px 0' }} />
        <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default StockSection;