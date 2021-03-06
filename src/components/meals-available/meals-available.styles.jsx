import styled from 'styled-components';

export const StyledDiv = styled.div`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
  
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledLoading = styled.div`
  text-align: center;
  color: white;
`;

export const StyledError = styled.div`
  text-align: center;
  color: red;
`;

