import styled from 'styled-components';

export const StyledCartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 50rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; 
  }
`;

export const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const StyledActions = styled.div`
  
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #800020;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  & button:hover, button:active {
    background-color: #2c0d00;
    border-color: #2c0d00;
    color: white;
  }

  & .button--alt{
    color: #800020;
  }

  & .button {
    background-color: #800020;
    color: white;
  }
`;