import "./Meals.css";
import MealsSummary from "./MealsSummary";
import MealsList from "./MealsList";

function Meals() {
  return (
    <div className="meals-container">
      <MealsSummary />
      <MealsList />
    </div>
  );
}

export default Meals;
