import "./MealItem.css";

function MealItem(props) {
  return (
    <li className="meal">
      <div className="item-card">
        <h3>{props.name}</h3>
        <div className="desc">{props.desc}</div>
        <div className="price">Rs {props.price}</div>
      </div>
    </li>
  );
}

export default MealItem;
