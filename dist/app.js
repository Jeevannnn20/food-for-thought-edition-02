const menu=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
function closeMenu(){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';navigation.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');});
const panels={current:document.querySelector('#current-panel'),v1:document.querySelector('#v1-panel')};
const v1Navigation=document.querySelector('.fft-v1-nav');
function showEdition(view,scroll=false){if(!panels[view])view='current';Object.entries(panels).forEach(([key,panel])=>panel.hidden=key!==view);if(view==='v1')v1Navigation.setAttribute('aria-current','page');else v1Navigation.removeAttribute('aria-current');closeMenu();if(scroll)document.querySelector('main').scrollIntoView({behavior:'auto',block:'start'});}
function revealLinkedGuidance(){const element=document.getElementById(location.hash.slice(1));if(element&&element.tagName==='DETAILS')element.open=true;}
document.querySelectorAll('.view-v1-link').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();showEdition('v1',true);history.replaceState(null,'','#fftc-v1');}));
navigation.querySelectorAll('a:not(.view-v1-link)').forEach(link=>link.addEventListener('click',()=>{showEdition('current');const element=document.querySelector(link.getAttribute('href'));if(element&&element.tagName==='DETAILS')element.open=true;}));
document.querySelectorAll('.brand,.back-top').forEach(link=>link.addEventListener('click',()=>showEdition('current')));
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{showEdition(button.dataset.view,true);history.replaceState(null,'',button.dataset.view==='v1'?'#fftc-v1':'#top');}));
window.addEventListener('hashchange',()=>{showEdition(location.hash==='#fftc-v1'?'v1':'current');revealLinkedGuidance();});
showEdition(location.hash==='#fftc-v1'?'v1':'current');revealLinkedGuidance();

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{const target=document.getElementById(link.getAttribute('href').slice(1));if(target?.tagName==='DETAILS')target.open=true;}));
