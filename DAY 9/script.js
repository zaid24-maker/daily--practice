let products = [
  { name: "Laptop", price: 55000 },
  { name: "Phone", price: 25000 },
  { name: "Headphones", price: 3000 }
];

let button = document.getElementById("renderBtn");
let container = document.getElementById("productContainer");

button.addEventListener("click", function () {
  container.innerHTML = products
    .map(function (product) {
      return `
        <div style="border:1px solid gray; margin:10px; padding:10px">
          <p><strong>Product:</strong> ${product.name}</p>
          <p><strong>Price:</strong> ₹${product.price}</p>
        </div>
      `;
    })
    .join("");
});




