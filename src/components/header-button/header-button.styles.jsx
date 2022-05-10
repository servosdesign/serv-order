import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #800000;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  :hover, :active {
    background-color: #2c0d00;
  }
`;

export const StyledIcon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

export const StyledBadge = styled.span`
  background-color: #B0B0B0;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  button:hover, button:active {
    background-color: #92320c;
  }
  `;

  export const StyledBump = styled.div`
    animation: bump 300ms ease-out;

      @keyframes bump {
        0% {
          transform: scale(1);
        }
        10% {
          transform: scale(0.9);
        }
        30% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(1.15);
        }
        100% {
          transform: scale(1);
        }
      }
`;