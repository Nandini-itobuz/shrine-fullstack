const eventDetails = document.querySelector(".event-details");
const catagoryCard = document.querySelector(".catagory-events");
const eventButtons = document.querySelectorAll(".event-buttons");
const eventWrapper = document.getElementsByClassName("event-carousal");
const eventCarousal = document.querySelector(".event-carousal");
let eventTrans = 0;


const { eventObj } = await fetchData("http://localhost:8081/events");

const currentHref= window.location.href;
var idIndex = currentHref.indexOf('id=');
var idSubstring = currentHref.substring(idIndex);
var idArray = idSubstring.split('&');
var idValue = idArray[0].split('=')[1];

const objRecieved = eventObj.find(ele => ele.id === idValue);
console.log(objRecieved.eventDetailsImg)
const createCardCatagory = createEventNode(
    "16rem",
    objRecieved.url,
    objRecieved.date,
    objRecieved.place,
    "",
    objRecieved.eventName,
    ""
)
catagoryCard.appendChild(createCardCatagory);

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

function createEventNode(
    width,
    url,
    eventDate,
    eventPlace,
    eventTime,
    eventName,
    eventDes
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
        const placeSupportDiv = createElements("div", {}, cadrBodyDiv);
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
    const learnButton = createElements(
        "button",
        { class: "all-buttons" },
        cadrBodyDiv
    );
    learnButton.textContent = "BOOKING NOW";

    return parentDiv;
}

function createCard() {
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
        objRecieved.eventDes
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
}

createCard()

async function fetchData(url) {
    try {
        const rawData = await fetch(url);
        return await rawData.json();
    } catch (err) {
        console.log(err);
    }
}

document.querySelector(".blog").addEventListener("click", () => {
    catagoryCard.innerHTML = "";
    console.log(eventObj);
    eventObj.forEach((ele) => {
        if (ele.catagory === "Blog") {
            const createCardCatagory = createEventNode(
                "16rem",
                ele.url,
                ele.date,
                ele.place,
                "",
                ele.eventName,
                ""
            );
            catagoryCard.appendChild(createCardCatagory);
        }
    });
});

document.querySelector(".book").addEventListener("click", () => {
    catagoryCard.innerHTML = "";
    eventObj.forEach((ele) => {
        if (ele.catagory === "Book") {
            const createCardCatagory = createEventNode(
                "16rem",
                ele.url,
                ele.date,
                ele.place,
                "",
                ele.eventName,
                ""
            );
            catagoryCard.appendChild(createCardCatagory);
        }
    });
});

document.querySelector(".charity").addEventListener("click", () => {
    catagoryCard.innerHTML = "";
    eventObj.forEach((ele) => {
        if (ele.catagory === "Charity") {
            const createCardCatagory = createEventNode(
                "16rem",
                ele.url,
                ele.date,
                ele.place,
                "",
                ele.eventName,
                ""
            );
            catagoryCard.appendChild(createCardCatagory);
        }
    });
});

document.querySelector(".harry").addEventListener("click", () => {
    catagoryCard.innerHTML = "";
    eventObj.forEach((ele) => {
        if (ele.catagory === "Harry") {
            const createCardCatagory = createEventNode(
                "16rem",
                ele.url,
                ele.date,
                ele.place,
                "",
                ele.eventName,
                ""
            );
            catagoryCard.appendChild(createCardCatagory);
        }
    });
});

document.querySelector(".portfolio").addEventListener("click", () => {
    catagoryCard.innerHTML = "";
    eventObj.forEach((ele) => {
        if (ele.catagory === "Portfolio") {
            const createCardCatagory = createEventNode(
                "16rem",
                ele.url,
                ele.date,
                ele.place,
                "",
                ele.eventName,
                ""
            );
            catagoryCard.appendChild(createCardCatagory);
        }
    });
});

eventObj.forEach((ele) => {
    eventCarousal.appendChild(
        createEventNode(
            "20rem",
            ele.url,
            ele.date,
            "", "",
            ele.eventName,
            ""
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
