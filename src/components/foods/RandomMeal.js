import { useEffect, useState } from "react";

import FoodItem from "./FoodItem";
import classes from "./RandomMeals.module.css";

const AllMeals = () => {
  const [foods, setFoods] = useState({});
  const [loadin, setLoading] = useState(true);
  const [getMeal, setGetMeal] = useState(false);

  useEffect(() => {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php/images/media/meals/llcbn01574260722.jpg/preview"
    )
      .then((response) => response.json())
      .then((data) => {
        const meal = data.meals[0];
        setFoods(meal);
        console.log(meal);
        setLoading(false);
      });
  }, [getMeal]);

  const newMealHandler = () => {
    setGetMeal((prevState) => (prevState = !prevState));
  };

  if (loadin) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className={classes.lista}>
      <div>
        <button onClick={newMealHandler}>New Meal</button>
      </div>
      <FoodItem
        key={foods.id}
        id={foods.id}
        name={foods.strMeal}
        img={foods.strMealThumb}
        category={foods.strCategory}
        area={foods.strArea}
        instruction={foods.strInstructions}
      />
    </section>
  );
};

export default AllMeals;
