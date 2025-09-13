
const $ = (s,d=document)=>d.querySelector(s);
// Theme toggle
const themeBtn = $('#themeToggle');
if (themeBtn){
  themeBtn.addEventListener('click',()=>{
    const mode = document.documentElement.dataset.theme==='light'?'dark':'light';
    document.documentElement.dataset.theme = mode;
    localStorage.setItem('theme',mode);
  });
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.dataset.theme = saved;
}
// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (navToggle && nav){
  navToggle.addEventListener('click',()=>{
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
// Footer year
const yel = document.getElementById('year');
if (yel) yel.textContent = new Date().getFullYear();
