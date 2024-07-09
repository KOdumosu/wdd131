let d = new Date();

document.getElementById("currentYear").innerHTML = '&copy;${d.getFullYear}';

document.querySelector('#lastModified').textContent = 'Last Modification: ${document.lastModified}';

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
});

function toggleActive(element) {
}

    const temples = [   
    {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

];

    createTempleCard(temples);

    const nonutahlink = document.querySelector("nonutah");

    nonutahlink.addEventListener("click", () => {
        createTempleCard(temples.filter(temple => !temple.location.includes("utah")));
    } )

    function createTempleCard(filteredTemples){
        document.querySelector("res-grid").innnerHTML = "";
        filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3")
        let location = document.createElement("p")
        let dedication = document.createElement("p")
        let area = document.createElement("p")
        let img = document.createElement("img")

        name.textContent = temple.templeName;
        location.innerHTML = '<span class = "label">Location:</span> ${temple.location}';
        dedication.innerHTML ='<span class = "label">Dedication:</span> ${temple.dedication}';
        area.innerHTML = '<span class = "label">size:</span> ${temple.area}sq ft';
        img.setAttribute("scr", temple.imageUrl);
        img.setAttribute("alt", '${temple.templeName} temple')
        img.setAttribute("loading", "lazy");

         card.appendChild(name);
         card.appendChild(location);
         card.appendChild(dedication);
         card.appendChild(area);
         card.appendChild(img);
         document.querySelector("res-grid").appendChild(card);
    });
    }

      // Add more temple objects here...
const currentyear = document.querySelector("#currentyear");

// use the date object
const today = new Date();

currentyear.innerHTML = "&copy;${today.getFullYear()} 🐱‍👤 Odumosu Kehinde Olusegun 🐱‍👤 Nigeria";

const lastModified = document.querySelector("#lastModified")

lastModified.innerHTML = "Last Modification ${document.lastModified}";

