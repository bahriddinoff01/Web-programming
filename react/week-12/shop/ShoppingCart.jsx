import { useState } from "react";
import products from "./products";
import ProductList from "./ProductList";
import CartPanel from "./CartPanel";

// Parent component: owns the cart state and passes it down (lifting state up).
const ShoppingCart = () => {
  // State: array of cart items, e.g. [{ id, name, price, image, quantity }]
  const [cart, setCart] = useState([]);

  // Add: if the product is already in the cart, add 1 to its quantity;
  // otherwise put a new item (quantity 1) at the end of the array.
  const addToCart = (product) => {
    setCart((prev) => {
      const inCart = prev.find((item) => item.id === product.id);
      if (inCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove: keep every item except this one.
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Quantity: + adds 1, - takes 1 away; an item that reaches 0 leaves the cart.
  const changeQuantity = (id, amount) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Computed from state, not stored: total price and number of items.
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
      <ProductList
        products={products}
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />
      <CartPanel
        items={cart}
        total={total}
        count={count}
        onIncrease={(id) => changeQuantity(id, 1)}
        onDecrease={(id) => changeQuantity(id, -1)}
        onRemove={removeFromCart}
        onClear={() => setCart([])}
      />
    </div>
  );
};

export default ShoppingCart;
