import { useState } from "react";
import "./MealItem.css";

function MealItem(props) {
  const [itemcount, setItemCount] = useState(1);
  const additem = () => {
    setItemCount((x) => x + 1);
  };
  return (
    <li className="meal">
      <div className="item-card">
        <h3>{props.name}</h3>
        <div className="desc">{props.desc}</div>
        <div className="price">Rs {props.price}</div>
      </div>
      <div className="amount">
        <div>
          <span>Amount</span>
          <span>{itemcount}</span>
        </div>
        <div>
          <button onClick={additem}>Add</button>
        </div>
      </div>
    </li>
  );
}

export default MealItem;
