import CartIcon from '../cart-icon/cart-icon.component';

import { StyledButton, StyledIcon, StyledBadge } from './header-button.styles';

const HeaderCartButton = props => {
  return ( 
    <StyledButton>
      <StyledIcon>
        <CartIcon />
      </StyledIcon>
      <span>Your Cart</span>
      <StyledBadge>
        3
      </StyledBadge>
    </StyledButton>
  );
};

export default HeaderCartButton;