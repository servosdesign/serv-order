import { StyledCartItem, StyledSummary, StyledPrice, StyledAmount, StyledActions } from './cart-item.styles';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <StyledCartItem>
      <div>
        <h2>{props.name}</h2>
        <StyledSummary>
          <StyledPrice>{price}</StyledPrice>
          <StyledAmount>x {props.amount}</StyledAmount>
        </StyledSummary>
      </div>
      <StyledActions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </StyledActions>
    </StyledCartItem>
  );
};

export default CartItem;
