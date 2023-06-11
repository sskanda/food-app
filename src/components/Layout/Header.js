import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <header className="header">
        <h1 id="headtext">Foodie</h1>
        <div>
          <button className="header-button">
            <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
            <span>Your Cart </span>
            <span className="badge">3</span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
