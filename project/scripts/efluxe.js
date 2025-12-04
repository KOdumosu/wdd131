// basic interactivity
const hamb = document.getElementById('hamb');
const mnav = document.getElementById('mnav');
hamb.addEventListener('click', ()=>{
mnav.classList.toggle('open');
mnav.setAttribute('aria-hidden', String(!mnav.classList.contains('open')));
});


// portfolio demo images (your actual images)
const portfolio = [
  { title: 'Temples page', img: 'images/lagos-temple.jpeg' },
  { title: 'Photography', img: 'images/photography.jpg' },
  { title: 'Branding', img: 'images/poster1.jpg' },
  { title: 'Graphics', img: 'images/flyer.jpg' },
  { title: 'Digital Solutions', img: 'images/digital.jpeg' },
  { title: 'Community project', img: 'images/community.jpg' }
];


const grid = document.getElementById('portfolioGrid');
function render(){
grid.innerHTML = '';
portfolio.forEach((p,i)=>{
const fig = document.createElement('figure');
fig.className = 'thumb';
fig.innerHTML = `<img loading="lazy" src="${p.img}" alt="${p.title}"><figcaption style="padding-top:8px; font-size:0.95rem">${p.title}</figcaption>`;
grid.appendChild(fig);
});
}
render();


function addMore(){
portfolio.push({title:'New item', img:`https://picsum.photos/seed/p${Math.random().toString(36).slice(2,6)}/600/400`});
render();
window.scrollTo({top:document.getElementById('portfolio').offsetTop, behavior:'smooth'});
}


// footer year
document.getElementById('yr').textContent = new Date().getFullYear();