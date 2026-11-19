// Child component: the cart sidebar with quantity controls and the total.
const CartPanel = ({ items, total, count, onIncrease, onDecrease, onRemove, onClear }) => {
  return (
    <aside
      aria-labelledby="cart-title"
      className="h-fit rounded-xl border border-gray-200 bg-white p-4 lg:sticky lg:top-4 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 id="cart-title" className="text-lg font-semibold">
          Your cart
        </h3>
        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>

      {items.length === 0 ? (
        <p className="py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Your cart is empty. Add a product to get started.
        </p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {items.map((item) => (
            <li key={item.id} className="py-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                  className="rounded-md px-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40"
                >
                  ✕
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDecrease(item.id)}
                    aria-label={`Decrease ${item.name} quantity`}
                    className="h-8 w-8 rounded-lg border border-gray-300 font-semibold transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold" aria-live="polite">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    aria-label={`Increase ${item.name} quantity`}
                    className="h-8 w-8 rounded-lg border border-gray-300 font-semibold transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700"
                  >
                    +
                  </button>
                </div>
                <span className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-800">
        <span className="font-semibold">Total</span>
        <span className="text-xl font-bold text-indigo-700 dark:text-indigo-300">
          ${total.toFixed(2)}
        </span>
      </div>

      {items.length > 0 && (
        <button
          onClick={onClear}
          className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium transition hover:border-red-500 hover:text-red-600 dark:border-gray-700"
        >
          Clear cart
        </button>
      )}
    </aside>
  );
};

export default CartPanel;
