import { mountTask } from "../src/page.jsx";
import ShoppingCounter from "./ShoppingCounter";
import shoppingCounter from "./ShoppingCounter.jsx?raw";

mountTask(ShoppingCounter, [{ name: "ShoppingCounter.jsx", code: shoppingCounter }]);
