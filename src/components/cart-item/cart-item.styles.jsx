import styled from 'styled-components';

export const StyledCartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #800020;
  padding: 1rem 0;
  margin: 1rem 0;

  & div{
    max-height: 100px;
  }
 

  & h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }

  & button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #800020;
    border: 1px solid #800020;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  }

  & button:hover, button:active {
    background-color: #2c0d00;
    border-color: #2c0d00;
    color: white;
  }
`;

export const StyledSummary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPrice = styled.span`
  font-weight: bold;
  color: #800020;
`;

export const StyledAmount = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #363636;
`;

export const StyledActions = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;