const navOpen = document.querySelector(".label-home");
const navList = document.querySelector('.list-home');

navOpen.addEventListener('click', () => {
    navList.classList.toggle("list-home");
    navOpen.classList.toggle('label-af');
    navOpen.classList.toggle('change');
});
const navPages = document.querySelector(".label-pages");
const navPage = document.querySelector('.list-pages');

navPages.addEventListener('click', () => {
    navPage.classList.toggle("list-pages");
    navPages.classList.toggle('label-af');
    navPages.classList.toggle('change');
});

const navHosts = document.querySelector(".label-host");
const navHost = document.querySelector('.list-host');

navHosts.addEventListener('click', () => {
    navHost.classList.toggle("list-host");
    navHosts.classList.toggle('label-af');
    navHosts.classList.toggle('change');
});

const navServs = document.querySelector(".label-ser");
const navServ = document.querySelector('.list-ser');

navServs.addEventListener('click', () => {
    navServ.classList.toggle("list-ser");
    navServs.classList.toggle('label-af');
    navServs.classList.toggle('change');
});

const navPrices = document.querySelector(".label-price");
const navPrice = document.querySelector('.list-price'); 
navPrices.addEventListener('click', () => {
    navPrice.classList.toggle("list-price");
    navPrices.classList.toggle('label-af');
    navPrices.classList.toggle('change');
});