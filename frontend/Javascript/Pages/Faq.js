const carouselContainer = document.getElementsByClassName('carousel-container')
const carouselActive = document.querySelectorAll(".carousel-active");
const prevBtn = document.getElementsByClassName("prev-btn");
const nextBtn = document.getElementsByClassName("next-btn");
const getAccordionDivEven = document.getElementById('accordion-section-even');
const getAccordionDivOdd = document.getElementById('accordion-section-odd');

const dataFaqsObj = await fetchData(`http://localhost:8081/faq`);
const faqQuestinsAns =dataFaqsObj.dataFaqs;

const dataCarousalImgs = await fetchData(`http://localhost:8081/images`);
const carousalArrayObj = dataCarousalImgs.dataCarousals;
const carousalArray = [];
carousalArrayObj.forEach(ele=>{
  carousalArray.push(Object.values(ele));
})

let currIndex = 0;

async function fetchData(url) {
  try {
      const rawData = await fetch(url);
      return await rawData.json();
  } catch (err) {
      console.log(err);
  }
}

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

function createAccordion(ques, ans,index){
  return `<div class="accordion-item my-3 border-start-0 border-top-0  border-end-0  ">
  <h2 class="accordion-header ">
    <button class="accordion-button heading-family"  type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${index}" aria-expanded="true" aria-controls="collapse-${index}">
      <div class= "accordion-index px-3 py-2 me-3 ">${index}</div> ${ques}
    </button>
  </h2>
  <div id="collapse-${index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body content-family"> ${ans}
    </div>
  </div>
</div>`
}


for (let i = 0; i < carousalArray.length; i++) {
  createCarousal(carousalArray[i]);
}

let carouselItem = document.querySelectorAll(".carousel-item");
let carouselLength = carouselItem.length;
nextBtn[0].addEventListener("click", nextSlide);
prevBtn[0].addEventListener("click", previousSlide);

currentSlide(currIndex);

faqQuestinsAns.forEach((ele,index) =>{
  if(index%2==0){
    getAccordionDivEven.insertAdjacentHTML("beforeend",createAccordion(ele.question,ele.answer,index))
  }
  else{
    getAccordionDivOdd.insertAdjacentHTML("beforeend",createAccordion(ele.question,ele.answer,index))
  }
})

// setInterval(() => {
//   nextSlide(currIndex);
// }, 2000);