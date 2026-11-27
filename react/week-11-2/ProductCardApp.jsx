import ProductCard from "./ProductCard";

// Numbers and booleans are passed in braces; strings can use quotes.
const ProductCardApp = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <ProductCard name="Laptop stand" price={29.99} rating={4.5} inStock={true} />
      <ProductCard name="USB-C cable" price={9.5} rating={4} inStock={true} />
      <ProductCard name="Desk lamp" price={24} rating={3.5} inStock={false} />
    </div>
  );
};

export default ProductCardApp;
