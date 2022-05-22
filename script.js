const hamburgerBtn = document.querySelector(".header .fa-bars");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerBtn.addEventListener("click", ()=>{
    hamburgerMenu.classList.toggle("display-block");
})