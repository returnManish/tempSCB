import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Divider, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MutualFundSection from './MutualFundSection';
import StockSection from './StockSection';

//import ETFSection from './ETFSection'; // New component

function VariableReturnsSection() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '10px', color: '#1976d2' }}>
        Variable Returns
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6">Mutual Fund Suggestions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MutualFundSection />
        </AccordionDetails>
      </Accordion>
      <Divider style={{ margin: '10px 0' }} />
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6">Stock Suggestions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StockSection />
        </AccordionDetails>
      </Accordion>
      <Divider style={{ margin: '10px 0' }} />
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h6">ETFs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <ETFSection /> */}
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}

export default VariableReturnsSection;