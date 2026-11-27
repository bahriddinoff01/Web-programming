import { mountTask } from "../src/page.jsx";
import ShoppingCart from "./shop/ShoppingCart";
import shoppingCart from "./shop/ShoppingCart.jsx?raw";
import productList from "./shop/ProductList.jsx?raw";
import cartPanel from "./shop/CartPanel.jsx?raw";
import products from "./shop/products.js?raw";

mountTask(ShoppingCart, [
  { name: "ShoppingCart.jsx", code: shoppingCart },
  { name: "ProductList.jsx", code: productList },
  { name: "CartPanel.jsx", code: cartPanel },
  { name: "products.js", code: products },
]);
