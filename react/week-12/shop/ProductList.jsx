// Child component: shows every product with Add / Remove buttons.
const ProductList = ({ products, cart, onAdd, onRemove }) => {
  return (
    <section aria-labelledby="products-title">
      <h3 id="products-title" className="mb-3 text-lg font-semibold">
        Products
      </h3>
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => {
          const inCart = cart.find((item) => item.id === product.id);
          return (
            <li
              key={product.id}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={product.image}
                alt={product.name}
                width="400"
                height="300"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-semibold">{product.name}</h4>
                  <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                {inCart && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    In cart: {inCart.quantity}
                  </p>
                )}
                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => onAdd(product)}
                    className="flex-1 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
                  >
                    Add to cart
                  </button>
                  {inCart && (
                    <button
                      onClick={() => onRemove(product.id)}
                      className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium transition hover:border-red-500 hover:text-red-600 dark:border-gray-700"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProductList;
