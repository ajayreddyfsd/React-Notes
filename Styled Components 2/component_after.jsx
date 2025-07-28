// StyledComponentsExample.jsx
import React from 'react';
import {
  StyledContainer,
  StyledLink,
  StyledButton,
  StyledList,
  StyledListItem
} from './StyledComponentsExample.styles';

function StyledComponentsExample() {
  return (
    <StyledContainer>
      <h2>Hello 👋</h2>
      <StyledLink href="#">Visit Link</StyledLink>
      <br />
      <StyledButton>Click Me</StyledButton>
      <StyledList>
        <StyledListItem>First item</StyledListItem>
        <StyledListItem>Second item</StyledListItem>
        <StyledListItem>Third item</StyledListItem>
      </StyledList>
    </StyledContainer>
  );
}

export default StyledComponentsExample;
