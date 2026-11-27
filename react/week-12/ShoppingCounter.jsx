import { useState } from "react";

// Three items, each with its own quantity.
// The quantities are kept in one array in state; the total is worked out on every render.
const ITEMS = [
  { id: "coffee", name: "Iced coffee", price: 3.5 },
  { id: "bagel", name: "Bagel", price: 2.25 },
  { id: "juice", name: "Orange juice", price: 4 },
];

const ShoppingCounter = () => {
  const [quantities, setQuantities] = useState([0, 0, 0]);

  // Changes one item's quantity by +1 or -1, never going below 0
  const changeQuantity = (index, step) => {
    setQuantities((prev) =>
      prev.map((qty, i) => (i === index ? Math.max(0, qty + step) : qty)),
    );
  };

  const total = ITEMS.reduce((sum, item, i) => sum + item.price * quantities[i], 0);

  return (
    <div className="mx-auto max-w-md space-y-3">
      {ITEMS.map((item, i) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">${item.price.toFixed(2)} each</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeQuantity(i, -1)}
              disabled={quantities[i] === 0}
              aria-label={`Remove one ${item.name}`}
              className="h-9 w-9 rounded-lg border border-gray-300 text-lg font-semibold transition hover:border-indigo-500 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700"
            >
              −
            </button>
            <span className="w-6 text-center font-semibold tabular-nums">{quantities[i]}</span>
            <button
              onClick={() => changeQuantity(i, 1)}
              aria-label={`Add one ${item.name}`}
              className="h-9 w-9 rounded-lg bg-indigo-600 text-lg font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <p className="flex justify-between rounded-lg bg-indigo-50 px-4 py-3 text-lg font-semibold text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200">
        <span>Total</span>
        <span className="tabular-nums">${total.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default ShoppingCounter;
