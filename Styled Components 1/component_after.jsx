// CardAfter.jsx
import React from 'react';
import {
  StyledCard,
  StyledTitle,
  StyledSubtitle,
  StyledButton
} from './CardAfter.styles';

function CardAfter() {
  return (
    <StyledCard>
      <StyledTitle>Welcome</StyledTitle>
      <StyledSubtitle>This is a styled card using styled-components.</StyledSubtitle>
      <StyledButton>Click Me</StyledButton>
    </StyledCard>
  );
}

export default CardAfter;
