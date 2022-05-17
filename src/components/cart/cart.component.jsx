import Modal from "../modal/modal.component";

import { StyledCartItems, StyledTotal, StyledActions } from "./cart.styles";

const Cart = props => {
  const cartItems = <StyledCartItems>{[{
    id: 'c1',
    name: 'Sushi',
    amount: 2,
    price: 12.99
  }].map((item) => <li>{item.name}</li>)}</StyledCartItems>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <StyledTotal>
        <span>Total Amount</span>
        <span>35.62</span>
      </StyledTotal>
      <StyledActions className='actions'>
        <button onClick={props.onClose} className='button--alt'>Close</button>
        <button className='button'>Order</button>
      </StyledActions>
    </Modal>
  );
};

export default Cart;