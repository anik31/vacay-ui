const hamburgerBtn = document.querySelector(".header .fa-bars");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".hamburger-menu .fa-times");

hamburgerBtn.addEventListener("click", ()=>{
    hamburgerMenu.classList.add("display-block");
})

closeBtn.addEventListener("click", ()=>{
    hamburgerMenu.classList.remove("display-block");
})