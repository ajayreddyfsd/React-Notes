// StyledExampleAfter.jsx
import React from 'react';
import {
  StyledContainer,
  StyledTitle,
  StyledAnchor,
  StyledRouterLink,
  StyledButton,
  StyledList,
  StyledListItem
} from './StyledExampleAfter.styles';

function StyledExampleAfter() {
  return (
    <StyledContainer>
      <StyledTitle>Hello 👋</StyledTitle>
      <StyledAnchor href="#">External Link</StyledAnchor><br />
      <StyledRouterLink to="/about">About Page</StyledRouterLink><br />
      <StyledButton>Click Me</StyledButton>
      <StyledList>
        <StyledListItem>First item</StyledListItem>
        <StyledListItem>Second item</StyledListItem>
      </StyledList>
    </StyledContainer>
  );
}

export default StyledExampleAfter;
