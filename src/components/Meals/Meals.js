import "./Meals.css";
import MealsSummary from "./MealsSummary";
import MealsList from "./MealsList";

function Meals(props) {
  return (
    <div className="meals-container">
      <MealsSummary />
      <MealsList />
    </div>
  );
}

export default Meals;
