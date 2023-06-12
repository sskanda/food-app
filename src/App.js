import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [showcart, setShowCart] = useState(false);
  const enablecart = () => {
    setShowCart(true);
  };
  const disablecart = () => {
    setShowCart(false);
  };
  return (
    <>
      {showcart && <Cart onDisableCart={disablecart} />}
      <Header onEnableCart={enablecart}></Header>
      <Meals></Meals>
    </>
  );
}

export default App;
