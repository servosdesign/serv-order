import React from 'react';

import { StyledDiv } from "./input.styles";

const Input = React.forwardRef((props, ref) => {
  return (
    <StyledDiv>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </StyledDiv>
  );
});

export default Input;