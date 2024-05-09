//Toggle Dark And Light Mode 
let mode = localStorage.getItem('Current Mode');
const windowsMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (mode === null) {
    mode = windowsMode ? 'dark' : 'light';
}
localStorage.setItem('Current Mode', mode);
document.documentElement.classList.add(mode);

const btnToggler = document.getElementsByClassName('togglerBtn');
const toggleModeArr = Array.from(btnToggler);
toggleModeArr.map((el) => {
    el.addEventListener('click', () => {
        mode = mode === 'light' ? 'dark' : 'light';
        localStorage.setItem('Current Mode', mode);
        document.documentElement.classList.toggle('dark');
    });
});

const openBTN = document.getElementById('nav-open')
const closeBTN = document.getElementById('nav-close')
const navList = document.getElementById('nav-list')
// navbar buttons toggler 
document.addEventListener('DOMContentLoaded', () => {
    closeBTN.classList.add('hidden')
})
openBTN.addEventListener('click', () => {
    navList.classList.add('h-screen')
    closeBTN.classList.remove('hidden')
    openBTN.classList.add('hidden')
})
closeBTN.addEventListener('click', () => {
    navList.classList.add('h-0')
    navList.classList.remove('h-screen')
    closeBTN.classList.add('hidden')
    openBTN.classList.remove('hidden')
})

// navbar add and remove active class
const links = document.querySelectorAll('.nav-link');

links.forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active')
        link.classList.add('active')
        
    })
})
