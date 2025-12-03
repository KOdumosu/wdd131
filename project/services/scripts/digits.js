// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const navList = document.getElementById('navList');
menuToggle?.addEventListener('click', ()=>{
mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
});


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', (e)=>{
const href = a.getAttribute('href');
if(href.startsWith('#')){
e.preventDefault();
const el = document.querySelector(href);
if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
}
});
});

// WhatsApp quick chat
const whatsappQuick = document.getElementById('whatsappQuick');
const waPhone = '2348026544083';
const waDefault = encodeURIComponent('Hello Efluxe — I would like to enquire about your digital services.');
whatsappQuick?.addEventListener('click', ()=>{
window.open('https://wa.me/2348026544083' + waPhone + '?text=' + waDefault,'_blank');
});
document.getElementById('waLink').href = 'https://wa.me/2348026544083' + waPhone + '?text=' + waDefault;


// Order form -> WhatsApp message prefill
document.getElementById('sendWhatsApp').addEventListener('click', ()=>{
const name = document.getElementById('name').value || 'No name';
const phone = document.getElementById('phone').value || '';
const service = document.getElementById('serviceSelect').value || 'General enquiry';
const details = document.getElementById('details').value || '';
const message = encodeURIComponent(`Hi Efluxe, I'm ${name} (${phone}). I need: ${service}. Brief: ${details}`);
window.open('https://wa.me/' + waPhone + '?text=' + message,'_blank');
});


// Basic email-submit stub for orderForm (no backend) — will show an alert and reset
document.getElementById('orderForm').addEventListener('submit', (e)=>{
e.preventDefault();
alert('Order submitted — this is a demo. To accept orders server-side, connect a backend or email service.');
e.target.reset();
});
// Reviews: simple localStorage implementation
const reviewsKey = 'efluxe_reviews_v1';
const reviewForm = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');
const clearReviewsBtn = document.getElementById('clearReviews');


function loadReviews(){
const raw = localStorage.getItem(reviewsKey) || '[]';
try{
const arr = JSON.parse(raw);
renderReviews(arr);
}catch(err){
console.error(err);
localStorage.setItem(reviewsKey,'[]');
}
}
function saveReview(obj){
const arr = JSON.parse(localStorage.getItem(reviewsKey) || '[]');
arr.unshift(obj);
localStorage.setItem(reviewsKey, JSON.stringify(arr.slice(0,50)));
renderReviews(arr);
}
function renderReviews(arr){
reviewsList.innerHTML = '';
if(!arr.length){
reviewsList.innerHTML = '<div class="micro">No reviews yet — be the first to leave feedback.</div>';
return;
}
arr.forEach(r=>{
const div = document.createElement('div');
div.className = 'review';
div.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><div><div class="author">${escapeHtml(r.name)}</div><div class="micro">${'★'.repeat(r.rating)} ${r.rating}/5</div></div><div class="micro">${new Date(r.ts).toLocaleString()}</div></div><div style="margin-top:8px">${escapeHtml(r.text)}</div>`;
reviewsList.appendChild(div);
});
}
function escapeHtml(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');}


reviewForm.addEventListener('submit', (e)=>{
e.preventDefault();
const name = document.getElementById('rname').value.trim();
const rating = document.getElementById('rrating').value;
const text = document.getElementById('rtext').value.trim();
if(!name||!rating||!text) return alert('Please complete the review form.');
saveReview({name,rating,text,ts:Date.now()});
reviewForm.reset();
});
clearReviewsBtn.addEventListener('click', ()=>{
if(confirm('Clear all local reviews?')){ localStorage.removeItem(reviewsKey); loadReviews(); }
});
loadReviews();