const toggle = document.querySelector('.toggle-mode');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
});