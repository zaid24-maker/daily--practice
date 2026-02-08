let products = [
  { name: "Laptop", price: 55000 },
  { name: "Phone", price: 25000 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 12000 }
];

let output = document.getElementById("output");

document.getElementById("showExpensive")
  .addEventListener("click", function () {

    let expensiveProducts = products.filter(function (product) {
      return product.price > 20000;
    });

    output.innerHTML = expensiveProducts
      .map(function (p) {
        return `<p>${p.name} - ₹${p.price}</p>`;
      })
      .join("");
  });


document.getElementById("calculateTotal")
  .addEventListener("click", function () {

    let total = products.reduce(function (sum, product) {
      return sum + product.price;
    }, 0);

    output.innerHTML = `<strong>Total Price: ₹${total}</strong>`;
  });





