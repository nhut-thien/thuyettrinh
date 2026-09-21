let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const counter = document.getElementById("counter");


function showSlide(index) {

    slides[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");

    counter.textContent =
        (currentSlide + 1) + " / " + slides.length;
}


/* NÚT TIẾP */

nextButton.onclick = function() {

    let next = currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);
};


/* NÚT QUAY LẠI */

prevButton.onclick = function() {

    let prev = currentSlide - 1;

    if (prev < 0) {
        prev = slides.length - 1;
    }

    showSlide(prev);
};


/* PHÍM ← → */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextButton.click();
    }

    if (event.key === "ArrowLeft") {
        prevButton.click();
    }

});