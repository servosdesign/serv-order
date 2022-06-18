import styled from 'styled-components';

export const StyledDiv = styled.div`
  
    margin-bottom: 0.5rem;

    & label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
    }

    & input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
    }

    &.invalid label {
      color: red;
    }
    
    &.invalid input {
      border-color: red;
      background-color: #ffd7d7;
    }
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  & button {
    font: inherit;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem; 
  }
  
  & button:hover, button:active {
    background-color: #ffe6dc;
  }

`;

export const StyledForm = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
`;

