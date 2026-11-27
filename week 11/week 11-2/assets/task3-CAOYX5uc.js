import{j as a,m as o}from"./page-iZ2EYeiW.js";const r=({name:s,price:d,rating:t,inStock:e})=>{const n=Math.round(t);return a.jsxs("article",{className:`rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 ${e?"":"opacity-60"}`,children:[a.jsxs("div",{className:"flex items-start justify-between gap-3",children:[a.jsx("h3",{className:"font-bold",children:s}),!e&&a.jsx("span",{className:"shrink-0 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-950/50 dark:text-red-300",children:"Out of Stock"})]}),a.jsxs("p",{className:"mt-2 text-2xl font-extrabold tabular-nums",children:["$",d.toFixed(2)]}),a.jsxs("p",{className:"mt-1 text-sm",children:[a.jsxs("span",{className:"text-amber-500","aria-hidden":"true",children:["★".repeat(n),"☆".repeat(5-n)]})," ",a.jsxs("span",{className:"text-gray-600 dark:text-gray-400",children:[t," / 5 stars"]})]})]})},c=()=>a.jsxs("div",{className:"grid gap-3 sm:grid-cols-3",children:[a.jsx(r,{name:"Laptop stand",price:29.99,rating:4.5,inStock:!0}),a.jsx(r,{name:"USB-C cable",price:9.5,rating:4,inStock:!0}),a.jsx(r,{name:"Desk lamp",price:24,rating:3.5,inStock:!1})]}),i=`// Code challenge: a ProductCard with name, price, rating and inStock.
// Bonus 1: the rating is shown as "4.5 / 5 stars".
// Bonus 2: an "Out of Stock" label (and a faded card) when inStock is false.
const ProductCard = ({ name, price, rating, inStock }) => {
  const fullStars = Math.round(rating);

  return (
    <article
      className={\`rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 \${
        inStock ? "" : "opacity-60"
      }\`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold">{name}</h3>
        {!inStock && (
          <span className="shrink-0 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-950/50 dark:text-red-300">
            Out of Stock
          </span>
        )}
      </div>
      <p className="mt-2 text-2xl font-extrabold tabular-nums">\${price.toFixed(2)}</p>
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
`,l=`import ProductCard from "./ProductCard";

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
`;o(c,[{name:"ProductCard.jsx",code:i},{name:"ProductCardApp.jsx",code:l}]);
