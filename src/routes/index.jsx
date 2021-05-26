import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

function Routes() {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  const [total, setTotal] = useState(list.reduce((acc, product) => acc + (product.price * product.quantity), 0));

  return (
    <Switch>
      <Route exact path="/">
        <Home setTotal={setTotal}/>
      </Route>
      <Route path="/cart">
        <Cart total={total} setTotal={setTotal}/>
      </Route>
    </Switch>
  );
}

export default Routes;
