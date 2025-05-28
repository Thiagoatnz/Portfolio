// Dark/Light Mode com Local Storage
const toggle = document.querySelector('.toggle-mode');
const body = document.querySelector('body');

// Checa se tem modo salvo
if(localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark');
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if(body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});

// Botão Voltar ao Topo
const btnTop = document.getElementById('btnTop');

window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};

btnTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});