const eventDetails = document.querySelector(".event-details");
const catagoryCard = document.querySelector(".catagory-events");
const eventButtons = document.querySelectorAll(".event-buttons");
const eventWrapper = document.getElementsByClassName("event-carousal");
const eventCarousal = document.querySelector(".event-carousal");
const eventsCatagories = document.getElementsByClassName('catagory-buttons');
const mainCard = document.querySelector('.event-book-div');
const { eventObj } = await fetchData("http://localhost:8081/events");
const currentHref= window.location.href;
const idIndex = currentHref.indexOf('id=');
const idSubstring = currentHref.substring(idIndex);
const idArray = idSubstring.split('&');
const idValue = idArray[0].split('=')[1];
const objToDisplay = eventObj.find(ele => ele.id === idValue);
const getGalleyTab = document.querySelector('#events-gallery');
const { dataGallery } = await fetchData("http://localhost:8081/gallery");
const getTags = document.getElementsByClassName('tags');
let eventTrans = 0;



let map=L.map('map')
function mapFun(long,lat){
map.setView([long, lat], 15);

L.tileLayer('http://{s}.google.com/vt/lyrl=m&x={x}&y={y}&z={z}', {
    maxZoom : 20,
    subdomains :['mt0','mt1','mt2','mt3']
}).addTo(map);
let marker = L.marker([22.572645, 88.363892]).addTo(map);
let circle = L.circle([22.572645, 88.363892], {
    color: '#0000',
    fillColor: '#f03',
    border:'#0000',
    fillOpacity: 0.3,
    radius: 300
}).addTo(map);

}

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

//sidecards
function createEventNode(
    width,
    url,
    eventDate,
    eventPlace,
    eventTime,
    eventName,
    eventDes,
    buttonValue,eventDetails
) {
    const parentDiv = createElements("div", {
        class: "card mb-4  p-0 border-0 mt-5",
        style: `max-width: ${width}`,
    });
    const parentWrapperDiv = createElements(
        "div",
        { class: "row g-0 align-items-center justify-content-center" },
        parentDiv
    );
    const imgWrapperDiv = createElements(
        "div",
        { class: "col-12" },
        parentWrapperDiv
    );
    const eventImg = createElements(
        "img",
        { src: url, class: "img-fluid rounded-2 w-100 h-100" },
        imgWrapperDiv
    );
    const cardBodyMainDiv = createElements(
        "div",
        { class: "col-12" },
        parentWrapperDiv
    );
    const cadrBodyDiv = createElements(
        "div",
        { class: "card-body" },
        cardBodyMainDiv
    );

    if (eventDate !== "") {
        const dateSupportDiv = createElements("div", {}, cadrBodyDiv);
        const calenderImg = createElements(
            "img",
            {
                src: "../../../FrontEnd/Asserts/image/home-page/events/calendar.png",
                class: "me-3 my-1",
            },
            dateSupportDiv
        );
        const dateSpan = createElements(
            "span",
            { class: "content-family" },
            dateSupportDiv
        );
        dateSpan.textContent = eventDate;
    }
    if (eventPlace !== "") {
        const placeSupportDiv = createElements("div", {style : "font-size: 0.8rem"}, cadrBodyDiv);
        const placeImg = createElements(
            "img",
            {
                src: "../../../FrontEnd/Asserts/image/home-page/events/home.png",
                class: "me-3 my-1",
            },
            placeSupportDiv
        );
        const placeSpan = createElements(
            "span",
            { class: "content-family" },
            placeSupportDiv
        );
        placeSpan.textContent = eventPlace;
    }

    if (eventTime !== "") {
        const timeSupportDiv = createElements("div", {}, cadrBodyDiv);
        const timeImg = createElements(
            "img",
            {
                src: "../../../FrontEnd/Asserts/image/home-page/events/clock.png",
                class: "me-3 my-1",
            },
            timeSupportDiv
        );
        const timeSpan = createElements(
            "span",
            { class: "content-family" },
            timeSupportDiv
        );
        timeSpan.textContent = eventTime;
    }
    const eventHeading = createElements(
        "h5",
        { class: "card-title heading-family mt-2" },
        cadrBodyDiv
    );
    eventHeading.textContent = eventName;
    const eventType = createElements(
        "p",
        { class: "card-text content-family" },
        cadrBodyDiv
    );
    eventType.textContent = eventDes;
    if(buttonValue !== ""){
        const learnButton = createElements(
            "button",
            { class: "all-buttons" },
            cadrBodyDiv, 
        );
        learnButton.textContent = buttonValue;
        learnButton.onClick = readDetails(learnButton,eventDetails);
    }
    return parentDiv;
}

//main card
function createCard(objRecieved) {
    const eventFullName = createElements(
        "h2",
        { class: "col-12  heading-text" },
        eventDetails
    );
    eventFullName.textContent = objRecieved.eventName;
    const eventFullDesc = createElements(
        "p",
        { class: "col-12 content-family my-3 pe-5 my-3" },
        eventDetails
    );
    eventFullDesc.textContent = objRecieved.briefDesc;

    const bookEventCard = document.querySelector(".event-book-div");
    const createCardFull = createEventNode(
        "47rem",
        objRecieved.eventDetailsImg,
        objRecieved.date,
        objRecieved.place,
        objRecieved.time,
        objRecieved.eventName,
        objRecieved.eventDes,
        "BOOKING NOW"
    );
    bookEventCard.appendChild(createCardFull);
    const eventFullDescX = createElements(
        "p",
        { class: "col-12 content-family my-3 px-2 my-3" },
        createCardFull
    );
    eventFullDescX.textContent = objRecieved.briefDesc;

    Object.values(objRecieved.eventBrief).forEach((ele) => {
        const eventFullDescXX = createElements(
            "p",
            { class: "col-12 content-family text-black my-1 px-2 my-3" },
            createCardFull
        );
        eventFullDescXX.textContent = ele;
    });

    const eventFullDescFooter = createElements(
        "p",
        { class: "col-12 content-family my-3 px-2 my-3" },
        createCardFull
    );
    eventFullDescFooter.textContent = objRecieved.eventDes;
    mapFun(Number(objRecieved.coordinates.long),Number(objRecieved.coordinates.lat))
}

async function fetchData(url) {
    try {
        const rawData = await fetch(url);
        return await rawData.json();
    } catch (err) {
        console.log(err);
    }
}

createCard(objToDisplay)

function readDetails(node,details){
    node.addEventListener('click',()=>{
        mainCard.innerHTML ="";
        eventDetails.innerHTML=""
        createCard(details)
    })
}

function searchCatagory(catagory){
    catagoryCard.innerHTML = "";

    const showCard = eventObj.find( ele => ele.catagory === catagory);
    const createCardCatagory = createEventNode(
        "17rem",
        showCard.url,
        showCard.date,
        showCard.place,
        "",
        showCard.eventName,
        "",
        "READ DETAILS",showCard
    );
    
    catagoryCard.appendChild(createCardCatagory);
}

for(let index of eventsCatagories){
    index.addEventListener('click',()=>{
        searchCatagory(index.dataset.catagory);
    })
    
}

dataGallery.forEach((ele) => {
    createElements(
      "img",
      { src: ele.imgUrl, class: "col-lg-4 col-sm-6 p-lg-3 mt-2" },
      getGalleyTab
    );
  });

eventObj.forEach((ele) => {
    eventCarousal.appendChild(
        createEventNode(
            "20rem",
            ele.url,
            ele.date,
            "", "",
            ele.eventName,"","",ele
        )
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
