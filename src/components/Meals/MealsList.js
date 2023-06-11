import "./MealsList.css";
import MealItem from "./Meal Item/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Peri Peri Chicken Drumstick",
    description: "Finest tender chicken",
    price: 899,
  },
  {
    id: "m2",
    name: "Palak Kofta Curry",
    description: "A german specialty!",
    price: 369,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 481,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 668,
  },
];

const MealsList = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className="meals">
      <div className="meal-bg">
        <ul>{mealsList}</ul>
      </div>
    </section>
  );
};

export default MealsList;
