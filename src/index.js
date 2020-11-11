import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";
import "../src/Styles/common.scss";
import "../src/Styles/reset.scss";

ReactDOM.render(
  <ProductDetails />,

  document.getElementById("root")
);
