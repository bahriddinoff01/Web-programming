// Product data: name, price and image URL for each item.
// The images are small SVG pictures stored as data URLs, so they always load.
const picture = (emoji, color) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">` +
      `<rect width="400" height="300" fill="${color}"/>` +
      `<text x="200" y="150" font-size="120" text-anchor="middle" dominant-baseline="central">${emoji}</text>` +
      `</svg>`
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
