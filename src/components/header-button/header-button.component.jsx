import { useContext } from 'react'

import CartIcon from '../cart-icon/cart-icon.component';
import CartContext from '../../store/cart-context';

import { StyledButton, StyledIcon, StyledBadge, bump } from './header-button.styles';

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);


  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return ( 
    <StyledButton  onClick={props.onClick} animate={bump}>
      <StyledIcon>
        <CartIcon />
      </StyledIcon>
      <span>Your Cart</span>
      <StyledBadge>
        {numberOfCartItems}
      </StyledBadge>
    </StyledButton>
  );
};

export default HeaderCartButton;