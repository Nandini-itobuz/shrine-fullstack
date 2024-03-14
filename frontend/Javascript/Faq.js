const carouselContainer = document.getElementsByClassName('carousel-container')
const carouselActive = document.querySelectorAll(".carousel-active");
const prevBtn = document.getElementsByClassName("prev-btn");
const nextBtn = document.getElementsByClassName("next-btn");
const carousalArray = ['../Asserts/image/pages/faq/hand-cross.png', '../Asserts/image/pages/faq/church.png', '../Asserts/image/pages/faq/jesus.png','../Asserts/image/pages/faq/sky.png']
let currIndex = 0;


function createCarousal(link) {
  const carouselItemDiv = document.createElement('div');
  carouselItemDiv.classList.add('carousel-item');
  const carouselImg = document.createElement('img');
  carouselImg.src = link;
  carouselItemDiv.appendChild(carouselImg);
  carouselContainer[0].appendChild(carouselItemDiv);
}

function currentSlide(index) {
  carouselItem.forEach((items) => {
    items.style.display = "none";
  });
  carouselActive.forEach((items) => {
    items.style.zoom = "normal";
  });
  carouselItem[index].style.display = "block";
}

function nextSlide() {
  currIndex = (currIndex + 1) % carouselLength;
  currentSlide(currIndex);
}

function previousSlide() {
  currIndex = (currIndex - 1 + carouselLength) % carouselLength;
  currentSlide(currIndex);
}

for (let i = 0; i < carousalArray.length; i++) {
  createCarousal(carousalArray[i]);
}

let carouselItem = document.querySelectorAll(".carousel-item");
let carouselLength = carouselItem.length;
nextBtn[0].addEventListener("click", nextSlide);
prevBtn[0].addEventListener("click", previousSlide);

currentSlide(currIndex);

// setInterval(() => {
//   nextSlide(currIndex);
// }, 2000);

