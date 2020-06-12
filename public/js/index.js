const body = document.querySelector('body');
const btnOpen = document.getElementById('menu-open');
const btnClose = document.getElementById('close-menu');

btnOpen.addEventListener("click", () => {
    body.classList.add("open-menu");
})

btnClose.addEventListener("click", () => {
    body.classList.remove("open-menu");
})