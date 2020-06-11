const body = document.querySelector('body');
const btnOpen = document.getElementById('menu-open');

btnOpen.addEventListener("click", () => {
    body.classList.add("open-menu");
})