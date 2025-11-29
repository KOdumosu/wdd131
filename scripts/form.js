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

document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display formatted last modified date and time
const modifiedDate = new Date(document.lastModified);
const options = { 
  year: "numeric", 
  month: "2-digit", 
  day: "2-digit", 
  hour: "2-digit", 
  minute: "2-digit", 
  second: "2-digit" 
};

document.getElementById("lastModified").textContent =
  "Last Modification: " + modifiedDate.toLocaleString("en-GB", options);