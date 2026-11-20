import{j as e,r as u,m as p}from"./page-CtLDEyqN.js";const l=(r,o)=>"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="${o}"/><text x="200" y="150" font-size="120" text-anchor="middle" dominant-baseline="central">${r}</text></svg>`),x=[{id:1,name:"Notebook",price:4.5,image:l("📓","#eef0ff")},{id:2,name:"Coffee mug",price:9.99,image:l("☕","#fff1e8")},{id:3,name:"Headphones",price:49,image:l("🎧","#e3f8f4")},{id:4,name:"Backpack",price:35,image:l("🎒","#ffecef")},{id:5,name:"Desk lamp",price:22.5,image:l("💡","#fff7d6")},{id:6,name:"Pen set",price:6,image:l("🖊️","#e9f2ff")}],b=({products:r,cart:o,onAdd:s,onRemove:c})=>e.jsxs("section",{"aria-labelledby":"products-title",children:[e.jsx("h3",{id:"products-title",className:"mb-3 text-lg font-semibold",children:"Products"}),e.jsx("ul",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-3",children:r.map(n=>{const d=o.find(m=>m.id===n.id);return e.jsxs("li",{className:"flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900",children:[e.jsx("img",{src:n.image,alt:n.name,width:"400",height:"300",className:"aspect-[4/3] w-full object-cover"}),e.jsxs("div",{className:"flex flex-1 flex-col gap-3 p-4",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[e.jsx("h4",{className:"font-semibold",children:n.name}),e.jsxs("span",{className:"font-semibold text-indigo-700 dark:text-indigo-300",children:["$",n.price.toFixed(2)]})]}),d&&e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["In cart: ",d.quantity]}),e.jsxs("div",{className:"mt-auto flex gap-2",children:[e.jsx("button",{onClick:()=>s(n),className:"flex-1 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300",children:"Add to cart"}),d&&e.jsx("button",{onClick:()=>c(n.id),className:"rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium transition hover:border-red-500 hover:text-red-600 dark:border-gray-700",children:"Remove"})]})]})]},n.id)})})]}),f=({items:r,total:o,count:s,onIncrease:c,onDecrease:n,onRemove:d,onClear:m})=>e.jsxs("aside",{"aria-labelledby":"cart-title",className:"h-fit rounded-xl border border-gray-200 bg-white p-4 lg:sticky lg:top-4 dark:border-gray-800 dark:bg-gray-900",children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("h3",{id:"cart-title",className:"text-lg font-semibold",children:"Your cart"}),e.jsxs("span",{className:"rounded-full bg-indigo-50 px-2.5 py-0.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",children:[s," ",s===1?"item":"items"]})]}),r.length===0?e.jsx("p",{className:"py-6 text-center text-sm text-gray-600 dark:text-gray-400",children:"Your cart is empty. Add a product to get started."}):e.jsx("ul",{className:"divide-y divide-gray-200 dark:divide-gray-800",children:r.map(t=>e.jsxs("li",{className:"py-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:t.name}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["$",t.price.toFixed(2)," each"]})]}),e.jsx("button",{onClick:()=>d(t.id),"aria-label":`Remove ${t.name} from cart`,className:"rounded-md px-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40",children:"✕"})]}),e.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>n(t.id),"aria-label":`Decrease ${t.name} quantity`,className:"h-8 w-8 rounded-lg border border-gray-300 font-semibold transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700",children:"-"}),e.jsx("span",{className:"w-6 text-center font-semibold","aria-live":"polite",children:t.quantity}),e.jsx("button",{onClick:()=>c(t.id),"aria-label":`Increase ${t.name} quantity`,className:"h-8 w-8 rounded-lg border border-gray-300 font-semibold transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700",children:"+"})]}),e.jsxs("span",{className:"font-semibold",children:["$",(t.price*t.quantity).toFixed(2)]})]})]},t.id))}),e.jsxs("div",{className:"mt-3 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-800",children:[e.jsx("span",{className:"font-semibold",children:"Total"}),e.jsxs("span",{className:"text-xl font-bold text-indigo-700 dark:text-indigo-300",children:["$",o.toFixed(2)]})]}),r.length>0&&e.jsx("button",{onClick:m,className:"mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium transition hover:border-red-500 hover:text-red-600 dark:border-gray-700",children:"Clear cart"})]}),h=()=>{const[r,o]=u.useState([]),s=t=>{o(i=>i.find(a=>a.id===t.id)?i.map(a=>a.id===t.id?{...a,quantity:a.quantity+1}:a):[...i,{...t,quantity:1}])},c=t=>{o(i=>i.filter(g=>g.id!==t))},n=(t,i)=>{o(g=>g.map(a=>a.id===t?{...a,quantity:a.quantity+i}:a).filter(a=>a.quantity>0))},d=r.reduce((t,i)=>t+i.price*i.quantity,0),m=r.reduce((t,i)=>t+i.quantity,0);return e.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]",children:[e.jsx(b,{products:x,cart:r,onAdd:s,onRemove:c}),e.jsx(f,{items:r,total:d,count:m,onIncrease:t=>n(t,1),onDecrease:t=>n(t,-1),onRemove:c,onClear:()=>o([])})]})},y=`import { useState } from "react";
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
`,v=`// Child component: shows every product with Add / Remove buttons.
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
                    \${product.price.toFixed(2)}
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
`,N=`// Child component: the cart sidebar with quantity controls and the total.
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
                    \${item.price.toFixed(2)} each
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  aria-label={\`Remove \${item.name} from cart\`}
                  className="rounded-md px-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40"
                >
                  ✕
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDecrease(item.id)}
                    aria-label={\`Decrease \${item.name} quantity\`}
                    className="h-8 w-8 rounded-lg border border-gray-300 font-semibold transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-semibold" aria-live="polite">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    aria-label={\`Increase \${item.name} quantity\`}
                    className="h-8 w-8 rounded-lg border border-gray-300 font-semibold transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700"
                  >
                    +
                  </button>
                </div>
                <span className="font-semibold">
                  \${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-800">
        <span className="font-semibold">Total</span>
        <span className="text-xl font-bold text-indigo-700 dark:text-indigo-300">
          \${total.toFixed(2)}
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
`,k=`// Product data: name, price and image URL for each item.
// The images are small SVG pictures stored as data URLs, so they always load.
const picture = (emoji, color) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">\` +
      \`<rect width="400" height="300" fill="\${color}"/>\` +
      \`<text x="200" y="150" font-size="120" text-anchor="middle" dominant-baseline="central">\${emoji}</text>\` +
      \`</svg>\`
  );

const products = [
  { id: 1, name: "Notebook", price: 4.5, image: picture("📓", "#eef0ff") },
  { id: 2, name: "Coffee mug", price: 9.99, image: picture("☕", "#fff1e8") },
  { id: 3, name: "Headphones", price: 49.0, image: picture("🎧", "#e3f8f4") },
  { id: 4, name: "Backpack", price: 35.0, image: picture("🎒", "#ffecef") },
  { id: 5, name: "Desk lamp", price: 22.5, image: picture("💡", "#fff7d6") },
  { id: 6, name: "Pen set", price: 6.0, image: picture("🖊️", "#e9f2ff") },
];

export default products;
`;p(h,[{name:"ShoppingCart.jsx",code:y},{name:"ProductList.jsx",code:v},{name:"CartPanel.jsx",code:N},{name:"products.js",code:k}]);
