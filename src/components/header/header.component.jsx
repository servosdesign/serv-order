import { StyledHeader, StyledDiv } from "./header.styles";

import mealsImg from '../../assets/meals.jpg';

const Header = props => {
  return (
    <>
      <StyledHeader>
        <h1>ServOrder</h1>
        <button>Cart</button>
      </StyledHeader>
      <StyledDiv>
        <img src={mealsImg} alt='A table full of delicious food!' />
      </StyledDiv>
    </>
  );
};

export default Header;