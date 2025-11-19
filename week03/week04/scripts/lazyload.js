// Mark images as loaded when their 'load' event fires so the CSS animation runs.
(function(){
const imgs = Array.from(document.querySelectorAll('main img'));
imgs.forEach(img =>
     {

if (img.complete && img.naturalWidth !== 0) {
img.classList.add('loaded');
} else {
img.addEventListener('load', () => img.classList.add('loaded'));
}
});

const lastElt = document.getElementById('lastModified');
if(lastElt){
const lm = new Date(document.lastModified);
lastElt.textContent = 'Last modified: ' + (isNaN(lm.getTime()) ? document.lastModified : lm.toLocaleString());
}
})();
