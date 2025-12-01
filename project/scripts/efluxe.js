// basic interactivity
const hamb = document.getElementById('hamb');
const mnav = document.getElementById('mnav');
hamb.addEventListener('click', ()=>{
mnav.classList.toggle('open');
mnav.setAttribute('aria-hidden', String(!mnav.classList.contains('open')));
});


// portfolio demo images (placeholders)
const portfolio = [
{title:'Branding sample', img:'https://picsum.photos/seed/p1/600/400'},
{title:'Poster design', img:'https://picsum.photos/seed/p2/600/400'},
{title:'Web app UI', img:'https://picsum.photos/seed/p3/600/400'},
{title:'Product photo', img:'https://picsum.photos/seed/p4/600/400'},
{title:'Campaign', img:'https://picsum.photos/seed/p5/600/400'},
{title:'Community project', img:'https://picsum.photos/seed/p6/600/400'}
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