import styled, { keyframes } from 'styled-components';

export const bump = keyframes`
  0% {transform: scale(1);}
  10% { transform: scale(0.9);}
  30% {transform: scale(1.1);}
  50% {transform: scale(1.15);}
  100% {transform: scale(1);}
  `;

export const StyledButton = styled.button`
cursor: pointer;
  font: inherit;
  border: none;
  background-color: #800020;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  animation: ${bump} 1s linear;

  :hover, :active {
    background-color: #2c0d00;
  }

`;

export const StyledIcon = styled.span`
  width: 1.3rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

export const StyledBadge = styled.span`
  background-color: WHITE;
  color: #800020;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  button:hover, button:active {
    background-color: #92320c;
  }
  `;
