import { useContext, useState } from 'react'

import Modal from '../modal/modal.component';
import CartContext from '../../store/cart-context';
import CartItem from '../cart-item/cart-item.component';
import Checkout from '../checkout/checkout.component';

import { StyledCartItems, StyledTotal, StyledActions } from "./cart.styles";

const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://servor-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <StyledCartItems>{
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
    </StyledCartItems>
  );

  const modalActions = (
    <StyledActions className='actions'>
      <button onClick={props.onClose} className='button--alt'>Close</button>
      {hasItems && <button className='button' onClick={orderHandler}>Order</button>}
    </StyledActions>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <StyledTotal>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </StyledTotal>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = (
    <p>Sending order data...</p>
  );

  const didSubmitModalContent = (
    <>
      <p>Succesfully sent the order!</p>
      <StyledActions className='actions'>
        <button onClick={props.onClose}>Close</button>
      </StyledActions>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;