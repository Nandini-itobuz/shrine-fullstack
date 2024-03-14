async function fetchData(url){
    try{
        const rawData = await fetch(url);
        return await rawData.json();
    }
    catch(err){
        console.log(err);
    }
}

const {articleCarousalObj} = await fetchData(`http://localhost:8081/article`);
const {yourMemebersObj} = await fetchData(`http://localhost:8081/member`);
const{eventObj} = await fetchData('http://localhost:8081/events');

const faithfulHeartsObj = {
    quote: "I love you when you bow in your mosque, kneel in your temple, pray in your church. For you and I are sons of one religion, and it is the spirit”“I love you when you bow in your mosque, kneel in your temple.",
    author: "Martin Luther",
};

const membersSection = document.querySelector(".members-section");
const articleNext = document.querySelector(".article-next");
const articleSlider = document.querySelector(".article-carousal");
const eventButtons = document.querySelectorAll(".event-buttons");
const eventWrapper = document.getElementsByClassName("event-carousal");
const eventCarousal = document.querySelector(".event-carousal");
const subscribeToChurch = document.getElementById("subscribe-to-church");
const subscribeChurchInput = document.getElementById('subscribe-church-input');
const subscribeCheckInput =  document.getElementById('subscribe-check-input');


let trans = 33;
let eventTrans = 0;

function yourMemebers(memberImg, memberName, memberSubname) {
    let node1 = document.createElement("DIV");
    node1.setAttribute("class", "col ");

    let node2 = document.createElement("DIV");
    node2.setAttribute("class", "card mb-3");
    node2.setAttribute(
        "style",
        "max-width: 540px; border:0;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
    );
    node1.appendChild(node2);

    let node3 = document.createElement("DIV");
    node3.setAttribute("class", "row g-0 align-items-center");
    node2.appendChild(node3);

    let node4 = document.createElement("DIV");
    node4.setAttribute("class", "col-4 col-sm-12 d-flex justify-content-center");
    node3.appendChild(node4);

    let node5 = document.createElement("IMG");
    node5.setAttribute("src", memberImg);
    node5.setAttribute("class", "card-img-top p-sm-4 p-2  ");
    node5.setAttribute("alt", "...");
    node4.appendChild(node5);

    let node6 = document.createElement("DIV");
    node6.setAttribute("class", "col-8 col-sm-12");
    node3.appendChild(node6);

    let node7 = document.createElement("DIV");
    node7.setAttribute(
        "class",
        "card-body d-flex your-member-card-body px-0 m-auto justify-content-center "
    );
    node6.appendChild(node7);

    let node8 = document.createElement("DIV");
    node8.setAttribute(
        "class",
        "p-2 d-flex align-items-center justify-content-center "
    );
    node7.appendChild(node8);

    let node9 = document.createElement("IMG");
    node9.setAttribute("src", "./Asserts/image/home-page/your-members/share.png");
    node8.appendChild(node9);

    let node10 = document.createElement("SPAN");
    node10.setAttribute("class", " d-inline-bloc ms-2");
    node7.appendChild(node10);

    let node11 = document.createElement("DIV");
    node11.setAttribute("class", "ms-2");
    node7.appendChild(node11);

    let node12 = document.createElement("H2");
    node12.setAttribute("class", " ps-2 m-0 fs-6 heading-family");
    node11.appendChild(node12);
    node12.textContent = memberName;

    let node14 = document.createElement("P");
    node14.setAttribute("class", "ps-2  content-family");
    node14.textContent = memberSubname;
    node11.appendChild(node14);

    return node1;
}

function createElements(elementName, obj, parentElement){
    const node = document.createElement(elementName);
    Object.entries(obj).forEach(ele =>{
        node.setAttribute(ele[0], ele[1])
    })

    if(parentElement !== undefined){
        parentElement.appendChild(node);
    }
    return node;
}


function createArticleCarousal(churchImg, articleHead, articleBody, userImg) {

    const parentDiv = createElements('div', {class: "col-4 p-2 m-0 p-1"});
    const cardDiv = createElements('div',{style: "max-width:340px ", class: "card "},parentDiv);
    const imgNode = createElements('img',{src: churchImg, class:'card-img-top', alt:'church'},cardDiv );
    const cardBody = createElements('div', {class: "card-body"},cardDiv);
    const cardHeading = createElements('h5', {class : "card-title heading-family fs-4 pe-5",},cardBody);
    cardHeading.textContent = articleHead;
    const cardDesc = createElements('p', {class: "card-text content-family"},cardBody);
    cardDesc.textContent = articleBody;
    const supportDiv = createElements('div',{class : "d-flex justify-content-start align-items-center"},cardDiv)
    const peopleImg = createElements('img', {src : userImg, alt:"girl"},supportDiv);
    const timeRead =  createElements("div", {class: "content-family"},supportDiv)
    timeRead.textContent = "2 mins ago";
    return parentDiv;
}

function eventNode(url, eventDate, eventPlace, eventTime, eventName, eventDes) {
    let event1 = document.createElement("DIV");
    event1.setAttribute("class", "card mb-4  p-0");
    event1.setAttribute("style", "max-width: 540px;");

    let event2 = document.createElement("DIV");
    event2.setAttribute(
        "class",
        "row g-0 align-items-center justify-content-center"
    );
    event1.appendChild(event2);

    let event3 = document.createElement("DIV");
    event3.setAttribute("class", "col-4");
    event2.appendChild(event3);

    let event4 = document.createElement("IMG");
    event4.setAttribute("src", url);
    event4.setAttribute("class", "img-fluid rounded-2 ");
    event3.appendChild(event4);

    let event5 = document.createElement("DIV");
    event5.setAttribute("class", "col-8");
    event2.appendChild(event5);

    let event6 = document.createElement("DIV");
    event6.setAttribute("class", "card-body");
    event5.appendChild(event6);

    let event7 = document.createElement("DIV");
    event6.appendChild(event7);

    let event8 = document.createElement("IMG");
    event8.setAttribute("src", "./Asserts/image/home-page/events/calendar.png");
    event8.setAttribute("class", "me-3 my-1");
    event7.appendChild(event8);

    let event9 = document.createElement("SPAN");
    event9.setAttribute("class", "content-family");
    event9.textContent = eventDate;
    event7.appendChild(event9);

    let event11 = document.createElement("DIV");
    event6.appendChild(event11);

    let event12 = document.createElement("IMG");
    event12.setAttribute("src", "./Asserts/image/home-page/events/home.png");
    event12.setAttribute("class", "me-3 my-1");
    event11.appendChild(event12);

    let event13 = document.createElement("SPAN");
    event13.setAttribute("class", "content-family");
    event13.textContent = eventPlace;
    event11.appendChild(event13);

    let event15 = document.createElement("DIV");
    event6.appendChild(event15);

    let event16 = document.createElement("IMG");
    event16.setAttribute("src", "./Asserts/image/home-page/events/clock.png");
    event16.setAttribute("class", "me-3 my-1");
    event15.appendChild(event16)

    let event17 = document.createElement("SPAN");
    event17.setAttribute("class", "content-family");
    event17.textContent = eventTime;
    event15.appendChild(event17);

    let event19 = document.createElement("H5");
    event19.setAttribute("class", "card-title heading-family mt-2");
    event19.textContent = eventName;
    event6.appendChild(event19);

    let event21 = document.createElement("P");
    event21.setAttribute("class", "card-text content-family");
    event21.textContent = eventDes;
    event6.appendChild(event21);

    let event22 = document.createElement("BUTTON");
    event22.setAttribute("class", "all-buttons");
    event6.appendChild(event22);
    event22.textContent = "JOIN NOW"

    return event1;
}

yourMemebersObj.forEach((element) => {
    membersSection.appendChild(
        yourMemebers(element.img, element.memName, element.memSubname)
    );
});

document.querySelector(".faithful-hearts-quote").textContent =
    faithfulHeartsObj.quote;
document.querySelector(".faithful-hearts-author").textContent =
    faithfulHeartsObj.author;

articleCarousalObj.forEach((element) => {
    articleSlider.appendChild(
        createArticleCarousal(element.url, element.churchName, element.churchDes, element.peopleImg)
    );
});

eventObj.forEach((ele) => {
    eventCarousal.appendChild(
        eventNode(ele.url, ele.date, ele.place, ele.time, ele.eventName, ele.eventDes)
    );
});

eventButtons[1].addEventListener("click", (ele) => {
    eventTrans += 60;
    eventWrapper[0].style.transform = `translateX(-${eventTrans}%)`;
    console.log(eventTrans);
    eventWrapper[0].style.transition = `0.1s all ease`;
});

eventButtons[0].addEventListener("click", (ele) => {
    eventTrans -= 60;
    eventWrapper[0].style.transform = `translateX(-${eventTrans}%)`;
    console.log(eventTrans);
    eventWrapper[0].style.transition = `0.1s all ease`;
});

articleNext.addEventListener("click", (ele) => {
    articleSlider.style.transform = `translateX(-${trans}%)`;
    trans += 33;
    articleSlider.style.transition = `0.3s all ease`;
});

subscribeToChurch.addEventListener('click',async ()=>{

    if(!subscribeCheckInput.checked) return alert("Please agree to terms and conditions");
    if(!subscribeChurchInput.value === "") return alert("Enter your e-mail");

    let emailObj = {email: subscribeChurchInput.value};
    console.log(JSON.stringify(emailObj));
        const response = await fetch('http://localhost:8081/subscribe', {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailObj), 
        });
})

// fetch data
// let homeurl = `http://localhost:8080/home`;

// const data = fetch(homeurl)
// .then((res)=>{
//     return res.json();
// })
// .then((homeData)=>{
//     return homeData;
// }).catch((error) => {
//     console.error("Error:", error);
//   });

// console.log(data)


