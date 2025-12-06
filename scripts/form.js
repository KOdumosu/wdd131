// ---------------------------
// Populate PRODUCT Dropdown
// ---------------------------
const products = [
  { id: 1, name: "Digital Photobook" },
  { id: 2, name: "Crystal frameless board" },
  { id: 3, name: "UltraSpeed Laptop Pro" },
  { id: 4, name: "4K Home Projector" },
  { id: 5, name: "Bluetooth Speaker Mini" }
];

const productSelect = document.querySelector("#productName");

productSelect.innerHTML = `<option value="">Choose a product</option>`;

products.forEach(product => {
  let opt = document.createElement("option");
  opt.value = product.name;
  opt.textContent = product.name;
  productSelect.appendChild(opt);
});

// ---------------------------
// LAST MODIFIED FOOTER INFO
// ---------------------------
document.getElementById("currentyear").textContent = new Date().getFullYear();

const modifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  "Last Modification: " + modifiedDate.toLocaleString("en-GB");


// ---------------------------
// FORM VALIDATION
// ---------------------------
document.querySelector("form").addEventListener("submit", function (event) {
  let errors = [];

  // Validate Product
  if (productSelect.value === "") {
    errors.push("Please select a product.");
  }

  // Validate Rating
  let ratingSelected = document.querySelector('input[name="rating"]:checked');
  if (!ratingSelected) {
    errors.push("Please select a rating.");
  }

  // Validate Date
  let installationDate = document.querySelector("#installation");
  if (installationDate.value === "") {
    errors.push("Please select the installation date.");
  }

  // Validate Contact Permission
  let contactChoice = document.querySelector('input[name="radio"]:checked');
  if (!contactChoice) {
    errors.push("Please tell us if we may contact you.");
  }

  // If errors exist, prevent form submission
  if (errors.length > 0) {
    event.preventDefault();
    alert(errors.join("\n"));
  }
});