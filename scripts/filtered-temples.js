const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // ---- ADD YOUR 3+ NEW TEMPLES HERE ----
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19500,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/b378c080e5880db5bf2bcf6d828b2f3fd59820de/full/500%2C/0/default"
  },
    {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/500%2C/0/default"
  },
   {
    templeName: "Abidjan, Ivory Coast",
    location: "Abidjan, Cote d'Ivoire",
    dedicated: "2025, May, 25", 
    area: 17362,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
  },
   {
    templeName: "Perth, Australia",
    location: "Yokine, Western Australia  6060, Australia",
    dedicated: "2001, May, 20",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/perth-australia-temple/perth-australia-temple-34994-main.jpg"
  }
];


// ---------------- DISPLAY FUNCTION ----------------
const container = document.querySelector("#templeContainer");
const pageTitle = document.querySelector("#pageTitle");

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach(t => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${t.templeName}</h3>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      <p></p>
      <img src="${t.imageUrl}" loading="lazy" alt="${t.templeName}">
    `;

    container.appendChild(card);
  });
}

displayTemples(temples);


// ---------------- MENU FILTERING ----------------
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.dataset.filter;

    let filtered = temples;

    switch (filter) {
      case "old":
        filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
        pageTitle.textContent = "Old Temples";
        break;

      case "new":
        filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
        pageTitle.textContent = "New Temples";
        break;

      case "large":
        filtered = temples.filter(t => t.area > 90000);
        pageTitle.textContent = "Large Temples";
        break;

      case "small":
        filtered = temples.filter(t => t.area < 10000);
        pageTitle.textContent = "Small Temples";
        break;

      default:
        filtered = temples;
        pageTitle.textContent = "Home";
    }

    displayTemples(filtered);
  });
});


// ---------------- HAMBURGER MENU ----------------
const menuBtn = document.querySelector("#menu");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});


// ---------------- FOOTER ----------------
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;