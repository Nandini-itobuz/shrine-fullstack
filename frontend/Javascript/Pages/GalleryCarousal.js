const carouselContainer = document.getElementsByClassName("carousel-container");
const carouselActive = document.querySelectorAll(".carousel-active");
const prevBtn = document.getElementsByClassName("prev-btn");
const nextBtn = document.getElementsByClassName("next-btn");
const membersSection = document.querySelector(".members-section");
const { yourMemebersObj } = await fetchData(`http://localhost:8081/member`);
console.log(yourMemebersObj);

const dataCarousalImgs = await fetchData(`http://localhost:8081/images`);
const carousalArrayObj = dataCarousalImgs.dataCarousals;
const carousalArray = [];
carousalArrayObj.forEach((ele) => {
  carousalArray.push(Object.values(ele));
});

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
  const carouselItemDiv = document.createElement("div");
  carouselItemDiv.classList.add("carousel-item");
  const carouselImg = document.createElement("img");
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
for (let i = 0; i < carousalArray.length; i++) {
  createCarousal(carousalArray[i]);
}

let carouselItem = document.querySelectorAll(".carousel-item");
let carouselLength = carouselItem.length;
nextBtn[0].addEventListener("click", nextSlide);
prevBtn[0].addEventListener("click", previousSlide);

currentSlide(currIndex);

function createElements(elementName, obj, parentElement) {
  const node = document.createElement(elementName);
  Object.entries(obj).forEach((ele) => {
    node.setAttribute(ele[0], ele[1]);
  });

  if (parentElement !== undefined) {
    parentElement.appendChild(node);
  }
  return node;
}

function createYourMemebers(memberImg, memberName, memberSubname) {
  const parentDiv = createElements("div", { class: "col" });
  const supportDiv = createElements(
    "div",
    {
      class: "card mb-3",
      style:
        "max-width: 540px; border:0;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
    },
    parentDiv
  );
  const wrapperDiv = createElements(
    "div",
    { class: "row g-0 align-items-center" },
    supportDiv
  );
  const childDiv = createElements(
    "div",
    { class: "col-4 col-sm-12 d-flex justify-content-center" },
    wrapperDiv
  );
  const imgNode = createElements(
    "img",
    { src: memberImg, class: "card-img-top p-sm-4 p-2", alt: "image" },
    childDiv
  );
  const imgWrapper = createElements(
    "div",
    { class: "col-8 col-sm-12" },
    wrapperDiv
  );
  const bodyDiv = createElements(
    "div",
    {
      class:
        "card-body justify-content-center align-items-center d-flex your-member-card-body px-0 m-auto justify-content-center ",
    },
    imgWrapper
  );
  const bodySupportDiv = createElements(
    "div",
    { class: "p-2 d-flex align-items-center justify-content-center " },
    bodyDiv
  );
  const imgShare = createElements(
    "img",
    { src: "../Asserts/image/home-page/your-members/share.png" },
    bodySupportDiv
  );
  const spanDiv = createElements(
    "span",
    { class: "d-inline-block ms-2" },
    bodyDiv
  );
  const spanSupportDiv = createElements("div", { class: "ms-2 " }, bodyDiv);
  const nameDiv = createElements(
    "h2",
    { class: "ps-2 m-0 fs-6 heading-family mt-3" },
    spanSupportDiv
  );
  nameDiv.textContent = memberName;
  const subnameDiv = createElements(
    "p",
    { class: "  content-family" },
    nameDiv
  );
  subnameDiv.textContent = memberSubname;
  return parentDiv;
}

yourMemebersObj.forEach((element) => {
  membersSection.appendChild(
    createYourMemebers(element.img, element.memName, element.memSubname)
  );
});
