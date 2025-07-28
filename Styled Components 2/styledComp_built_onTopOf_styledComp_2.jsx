import styled, { css } from 'styled-components';

const baseStyles = css`
  padding: 12px;
  border-radius: 6px;
  font-family: sans-serif;
`;

const Card = styled.div`
  ${baseStyles}
  background-color: #f9f9f9;
`;

const Input = styled.input`
  ${baseStyles}
  border: 1px solid #ccc;
`;
