
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