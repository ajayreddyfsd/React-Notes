// CardAfter.styles.jsx
import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
`;

export const StyledSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
