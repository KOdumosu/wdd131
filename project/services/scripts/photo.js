// ===== BOOKING + PAYSTACK PAYMENT SCRIPT =====


document.getElementById("bookingForm").addEventListener("submit", function (e) {
e.preventDefault();


// Collect form data
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const shootType = document.getElementById("shootType").value;


// Pricing logic
let amount = 0;
if (shootType === "portrait") amount = 25000;
if (shootType === "wedding") amount = 150000;
if (shootType === "event") amount = 60000;
if (shootType === "studio") amount = 30000;


// Trigger payment
payWithPaystack(name, email, phone, amount);
});


function payWithPaystack(name, email, phone, amount) {
let handler = PaystackPop.setup({
key: "YOUR_PUBLIC_KEY_HERE", // Replace with your Paystack public key
email: email,
amount: amount * 100, // Convert to kobo
currency: "NGN",
ref: "EFLUXE_" + Math.floor(Math.random() * 1000000000),
metadata: {
custom_fields: [
{
display_name: name,
variable_name: phone,
value: phone,
},
],
},
callback: function (response) {
alert("Payment Successful! Ref: " + response.reference);
},
onClose: function () {
alert("Payment window closed");
},
});
handler.openIframe();
}



