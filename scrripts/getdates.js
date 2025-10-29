// Display current year
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