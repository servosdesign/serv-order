import Card from '../card/card.component';
import MealItem from '../meals/meal-item/meal-item.component';

import { StyledDiv } from './meals-available.styles';

const MealsAvailable = () => {


  const mealsList = DUMMY_MEALS.map(meal => ( 
    <MealItem 
      id={meal.id}
      key={meal.id} 
      name={meal.name} 
      description={meal.description} 
      price={meal.price} 
   />
  ));

  return (
    <StyledDiv>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </StyledDiv>
  );
};

export default MealsAvailable;