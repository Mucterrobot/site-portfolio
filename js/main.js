
// Services section -modal

const serviceModal = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-btm");
const modalCloseBtn = document.querySelectorAll(".modal-clone-btn");

const modal = function (modalClick) {
    serviceModal[modalClick].classList.add("active");
}

learnMoreBtn.forEach((button, i) => {
    button.addEventListener("click", function(){
        modal(i);
    }) 
}) 

modalCloseBtn.forEach((button, i) => {
    button.addEventListener("click", function(){
        serviceModal[i].classList.remove("active");
    }) 
})


// portfolio section -modal

const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCard = document.querySelectorAll(".img-card");
const portfolioCloseBtn = document.querySelectorAll(".portfolio-clone-btn");


const modalPortfolio = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCard.forEach((button, i) => {
    button.addEventListener("click", function(){
        modalPortfolio(i);
    }) 
})

portfolioCloseBtn.forEach((button, i) => {
    button.addEventListener("click", function(){
        portfolioModals[i].classList.remove("active");
    })
})

// адаптивное меню бургер

const navMenuBtn = document.querySelector('.nav-menu-btn');
const navMenu = document.querySelector('.nav-menu');

navMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

