// Code challenge: a ProductCard with name, price, rating and inStock.
// Bonus 1: the rating is shown as "4.5 / 5 stars".
// Bonus 2: an "Out of Stock" label (and a faded card) when inStock is false.
const ProductCard = ({ name, price, rating, inStock }) => {
  const fullStars = Math.round(rating);

  return (
    <article
      className={`rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 ${
        inStock ? "" : "opacity-60"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold">{name}</h3>
        {!inStock && (
          <span className="shrink-0 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-950/50 dark:text-red-300">
            Out of Stock
          </span>
        )}
      </div>
      <p className="mt-2 text-2xl font-extrabold tabular-nums">${price.toFixed(2)}</p>
      <p className="mt-1 text-sm">
        <span className="text-amber-500" aria-hidden="true">
          {"★".repeat(fullStars)}
          {"☆".repeat(5 - fullStars)}
        </span>{" "}
        <span className="text-gray-600 dark:text-gray-400">{rating} / 5 stars</span>
      </p>
    </article>
  );
};

export default ProductCard;
