import { StyledLi, StyledDescription, StyledPrice } from './meal-item.styles';

const MealItem = props => {
  const price = `$${props.price.toFixed(2)}`;
  
  return (
    <StyledLi>
      <div>
        <h3>{props.name}</h3>
        <StyledDescription>{props.description}</StyledDescription>
        <StyledPrice>{price}</StyledPrice>
      </div>
      <div>

      </div>
    </StyledLi>
  );
};

export default MealItem;