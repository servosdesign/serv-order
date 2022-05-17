import { useRef, useState } from 'react'

import Input from "../../input/input.component";

import { StyledForm } from "./meal-item-form.styles";

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHanlder = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <StyledForm onSubmit={submitHanlder}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please entere a valid amount (1-5).</p>}
    </StyledForm>
  );
};

export default MealItemForm;