// StyledComponentsExample.styles.jsx
import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

export const StyledButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

export const StyledListItem = styled.li`
  margin-bottom: 8px;
  color: #333;
`;
