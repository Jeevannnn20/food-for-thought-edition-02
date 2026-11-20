const menu=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
function closeMenu(){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';navigation.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');});
const panels={current:document.querySelector('#current-panel'),v1:document.querySelector('#v1-panel')};
const v1Navigation=document.querySelector('.fft-v1-nav');
function showEdition(view,scroll=false){if(!panels[view])view='current';Object.entries(panels).forEach(([key,panel])=>panel.hidden=key!==view);if(view==='v1')v1Navigation.setAttribute('aria-current','page');else v1Navigation.removeAttribute('aria-current');closeMenu();if(scroll)document.querySelector('main').scrollIntoView({behavior:'auto',block:'start'});}
function revealLinkedGuidance(){const element=document.getElementById(location.hash.slice(1));if(element&&element.tagName==='DETAILS')element.open=true;}
document.querySelectorAll('.view-v1-link').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();showEdition('v1',true);history.replaceState(null,'','#fftc-v1');}));
navigation.querySelectorAll('a:not(.view-v1-link)').forEach(link=>link.addEventListener('click',()=>{showEdition('current');const href=link.getAttribute('href');const element=href?.startsWith('#')?document.getElementById(href.slice(1)):null;if(element&&element.tagName==='DETAILS')element.open=true;}));
document.querySelectorAll('.brand,.back-top').forEach(link=>link.addEventListener('click',()=>showEdition('current')));
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{showEdition(button.dataset.view,true);history.replaceState(null,'',button.dataset.view==='v1'?'#fftc-v1':'#top');}));
window.addEventListener('hashchange',()=>{showEdition(location.hash==='#fftc-v1'?'v1':'current');revealLinkedGuidance();});
showEdition(location.hash==='#fftc-v1'?'v1':'current');revealLinkedGuidance();

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{const target=document.getElementById(link.getAttribute('href').slice(1));if(target?.tagName==='DETAILS')target.open=true;}));

// Remember the submission view on this browser; this is a convenience, not authentication.
const registrationStorageKey = 'fft20.registrationComplete';
const submissionUrl = 'https://tally.so/r/o9RLeO';
let registrationComplete = false;
const entryCtas = [...document.querySelectorAll('[data-entry-cta]')].map(link => ({
  link,
  html: link.innerHTML,
  href: link.getAttribute('href'),
  target: link.getAttribute('target'),
  rel: link.getAttribute('rel')
}));
function readRegistrationState() {
  try { return localStorage.getItem(registrationStorageKey) === '1'; }
  catch { return registrationComplete; }
}
function renderRegistrationState() {
  entryCtas.forEach(({link, html, href, target, rel}) => {
    if (registrationComplete) {
      link.href = submissionUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.innerHTML = link.dataset.submitLabel || 'Submit your entry <span aria-hidden="true">↗</span>';
    } else {
      link.innerHTML = html;
      for (const [name, value] of Object.entries({href, target, rel})) {
        if (value === null) link.removeAttribute(name);
        else link.setAttribute(name, value);
      }
    }
  });
  document.querySelectorAll('[data-registration-only]').forEach(element => element.hidden = registrationComplete);
  document.querySelector('[data-reset-registration]').hidden = !registrationComplete;
  document.querySelector('[data-registration-heading]').textContent = registrationComplete ? 'Ready to submit.' : 'Get your team ready.';
  document.querySelector('[data-registration-eyebrow]').textContent = registrationComplete ? 'FOOD FOR THOUGHT 2.0 / SUBMISSION' : 'FOOD FOR THOUGHT 2.0 / REGISTRATION';
  document.querySelector('[data-submission-heading]').textContent = registrationComplete ? 'Submit your entry.' : 'Already registered? Submit your entry.';
}
function rememberRegistration(complete) {
  registrationComplete = complete;
  try {
    if (complete) localStorage.setItem(registrationStorageKey, '1');
    else localStorage.removeItem(registrationStorageKey);
  } catch { /* The current visit still works when browser storage is unavailable. */ }
  renderRegistrationState();
}
// Tally registration settings: Redirect on completion -> /?registration=complete#submit
const returnUrl = new URL(location.href);
if (returnUrl.searchParams.get('registration') === 'complete') {
  rememberRegistration(true);
  returnUrl.searchParams.delete('registration');
  history.replaceState(null, '', returnUrl.pathname + returnUrl.search + returnUrl.hash);
} else {
  registrationComplete = readRegistrationState();
  renderRegistrationState();
}
document.querySelectorAll('[data-mark-registered]').forEach(link => link.addEventListener('click', () => rememberRegistration(true)));
document.querySelector('[data-reset-registration]').addEventListener('click', () => rememberRegistration(false));
function refreshRegistrationState() {
  registrationComplete = readRegistrationState();
  renderRegistrationState();
}
window.addEventListener('pageshow', refreshRegistrationState);
window.addEventListener('focus', refreshRegistrationState);
window.addEventListener('storage', event => {
  if (event.key === registrationStorageKey || event.key === null) refreshRegistrationState();
});
