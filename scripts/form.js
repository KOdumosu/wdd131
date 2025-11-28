const products = [
  { id: 1, name: "Digital Photobook" },
  { id: 2, name: "Crystal frameless board" },
  { id: 3, name: "UltraSpeed Laptop Pro" },
  { id: 4, name: "4K Home Projector" },
  { id: 5, name: "Bluetooth Speaker Mini" }
];

const productSelect = document.querySelector("#productName");

// Populate dropdown
productSelect.innerHTML = `<option value="">Choose a product</option>`;

products.forEach(product => {
  let opt = document.createElement("option");
  opt.value = product.name;
  opt.textContent = product.name;
  productSelect.appendChild(opt);
});