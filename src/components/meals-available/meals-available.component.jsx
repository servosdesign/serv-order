import { useEffect, useState } from 'react';

import Card from '../card/card.component';
import MealItem from '../meals/meal-item/meal-item.component';

import { StyledDiv, StyledLoading } from './meals-available.styles';

const MealsAvailable = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch('https://servor-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
    <StyledLoading>
      <p>Loading...</p>
    </StyledLoading>
    );
  };

  const mealsList = meals.map(meal => (
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