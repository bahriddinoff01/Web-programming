import { mountTask } from "../src/page.jsx";
import ProductCardApp from "./ProductCardApp";
import productCard from "./ProductCard.jsx?raw";
import productCardApp from "./ProductCardApp.jsx?raw";

mountTask(ProductCardApp, [
  { name: "ProductCard.jsx", code: productCard },
  { name: "ProductCardApp.jsx", code: productCardApp },
]);
