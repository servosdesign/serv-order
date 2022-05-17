import { useContext } from 'react'

import Modal from '../modal/modal.component';
import CartContext from '../../store/cart-context';
import CartItem from '../cart-item/cart-item.component';

import { StyledCartItems, StyledTotal, StyledActions } from "./cart.styles";

const Cart = props => {
  const cartCtx  = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  
  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = <StyledCartItems>{
    cartCtx.items.map((item) => (
      <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null, item.id)} 
        onAdd={cartItemAddHandler.bind(null, item)} 
      />
    ))}
    </StyledCartItems>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <StyledTotal>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </StyledTotal>
      <StyledActions className='actions'>
        <button onClick={props.onClose} className='button--alt'>Close</button>
        {hasItems && <button className='button'>Order</button>}
      </StyledActions>
    </Modal>
  );
};

export default Cart;