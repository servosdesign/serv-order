import styled from 'styled-components';

export const StyledForm = styled.form`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: #800020;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  & button:hover, button:active {
    background-color: #2c0d00;
    border-color: #2c0d00;
  }
`;