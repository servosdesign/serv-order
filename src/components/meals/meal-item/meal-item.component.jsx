import { useContext } from 'react';

import MealItemForm from './meal-item-form.component';
import CartContext from '../../../store/cart-context';

import { StyledLi, StyledDescription, StyledPrice } from './meal-item.styles';

const MealItem = props => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <StyledLi>
      <div>
        <h3>{props.name}</h3>
        <StyledDescription>{props.description}</StyledDescription>
        <StyledPrice>{price}</StyledPrice>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </StyledLi>
  );
};

export default MealItem;