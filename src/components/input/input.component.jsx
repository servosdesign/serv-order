import { StyledDiv } from "./input.styles";

const Input = props => {
  return (
    <StyledDiv>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </StyledDiv>
  );
};

export default Input;