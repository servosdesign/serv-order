import HeaderCartButton from "../header-button/header-button.component";

import { StyledHeader, StyledDiv } from "./header.styles";

import mealsImg from '../../assets/meals.jpg';

const Header = props => {
  return (
    <>
      <StyledHeader>
        <h1>ServOrder</h1>
        <HeaderCartButton />
      </StyledHeader>
      <StyledDiv>
        <img src={mealsImg} alt='A table full of delicious food!' />
      </StyledDiv>
    </>
  );
};

export default Header;