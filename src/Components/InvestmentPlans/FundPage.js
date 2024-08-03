import React from 'react';
import { Container } from '@mui/material';
import VariableReturnsSection from './VariableReturnsSection';
import FixedReturnsSection from './FixedReturnsSection';


const FundPage = () => {
  return (
    <div>
        <Container style={{ padding: '20px' }}>
      <VariableReturnsSection />
      <FixedReturnsSection />
    </Container>
    </div>
  )
}

export default FundPage