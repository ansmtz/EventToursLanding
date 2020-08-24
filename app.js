const btn = document.getElementById('toggle-menu'),
    menu = document.querySelector('.menu'),
    signup = document.querySelector('.signup');

const toggleClasses = () => {
    menu.classList.toggle('opened')
    signup.classList.toggle('opened')
}
const toggleMenu = (e) => {
    e.target.closest('#toggle-menu') ? toggleClasses() : null;
}
btn.addEventListener('click', toggleMenu);