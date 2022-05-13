import Input from "../../input/input.component";

import { StyledForm } from "./meal-item-form.styles";

const MealItemForm = props => {
  return (
    <StyledForm>
      <Input
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
    </StyledForm>
  );
};

export default MealItemForm;