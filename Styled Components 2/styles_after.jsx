// StyledExampleAfter.styles.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 12px;
`;

export const StyledAnchor = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

export const StyledRouterLink = styled(Link)`
  color: #6610f2;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #520dc2;
  }
`;

export const StyledButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background-color: #218838;
  }
`;

export const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 16px;
`;

export const StyledListItem = styled.li`
  margin-bottom: 8px;
  color: #333;
`;
