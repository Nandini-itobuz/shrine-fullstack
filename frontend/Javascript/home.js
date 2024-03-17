const membersSection = document.querySelector(".members-section");
const articleNext = document.querySelector(".article-next");
const articleSlider = document.querySelector(".article-carousal");
const eventButtons = document.querySelectorAll(".event-buttons");
const eventWrapper = document.getElementsByClassName("event-carousal");
const eventCarousal = document.querySelector(".event-carousal");
const subscribeToChurch = document.getElementById("subscribe-to-church");
const subscribeChurchInput = document.getElementById("subscribe-church-input");
const subscribeCheckInput = document.getElementById("subscribe-check-input");
const { articleCarousalObj } = await fetchData(`http://localhost:8081/article`);
const { yourMemebersObj } = await fetchData(`http://localhost:8081/member`);
const { eventObj } = await fetchData("http://localhost:8081/events");
const faithfulHeartsObj = {
    quote:
        "I love you when you bow in your mosque, kneel in your temple, pray in your church. For you and I are sons of one religion, and it is the spirit”“I love you when you bow in your mosque, kneel in your temple.",
    author: "Martin Luther",
};

let trans = 33;
let eventTrans = 0;

async function fetchData(url) {
    try {
        const rawData = await fetch(url);
        return await rawData.json();
    } catch (err) {
        console.log(err);
    }
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

function createArticleCarousal(churchImg, articleHead, articleBody, userImg) {
    const parentDiv = createElements("div", { class: "col-4 p-2 m-0 p-1" });
    const cardDiv = createElements(
        "div",
        { style: "max-width:340px ", class: "card " },
        parentDiv
    );
    const imgNode = createElements(
        "img",
        { src: churchImg, class: "card-img-top", alt: "church" },
        cardDiv
    );
    const cardBody = createElements("div", { class: "card-body" }, cardDiv);
    const cardHeading = createElements(
        "h5",
        { class: "card-title heading-family fs-4 pe-5" },
        cardBody
    );
    cardHeading.textContent = articleHead;
    const cardDesc = createElements(
        "p",
        { class: "card-text content-family" },
        cardBody
    );
    cardDesc.textContent = articleBody;
    const supportDiv = createElements(
        "div",
        { class: "d-flex justify-content-start align-items-center" },
        cardDiv
    );
    const peopleImg = createElements(
        "img",
        { src: userImg, alt: "girl" },
        supportDiv
    );
    const timeRead = createElements(
        "div",
        { class: "content-family" },
        supportDiv
    );
    timeRead.textContent = "2 mins ago";
    return parentDiv;
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
                "card-body d-flex your-member-card-body px-0 m-auto justify-content-center ",
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
        { src: "./Asserts/image/home-page/your-members/share.png" },
        bodySupportDiv
    );
    const spanDiv = createElements(
        "span",
        { class: "d-inline-block ms-2" },
        bodyDiv
    );
    const spanSupportDiv = createElements("div", { class: "ms-2" }, bodyDiv);
    const nameDiv = createElements(
        "h2",
        { class: "ps-2 m-0 fs-6 heading-family" },
        spanSupportDiv
    );
    nameDiv.textContent = memberName;
    const subnameDiv = createElements(
        "p",
        { class: "ps-2  content-family" },
        nameDiv
    );
    subnameDiv.textContent = memberSubname;
    return parentDiv;
}

function createEventNode(
    url,
    eventDate,
    eventPlace,
    eventTime,
    eventName,
    eventDes
) {
    const parentDiv = createElements("div", {
        class: "card mb-4  p-0",
        style: "max-width: 23rem;",
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
        { src: url, class: "img-fluid rounded-2" },
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
    const dateSupportDiv = createElements("div",{}, cadrBodyDiv);
    const calenderImg = createElements(
        "img",
        {
            src: "./Asserts/image/home-page/events/calendar.png",
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
    const placeSupportDiv = createElements("div",{}, cadrBodyDiv);
    const placeImg = createElements(
        "img",
        { src: "./Asserts/image/home-page/events/home.png", class: "me-3 my-1" },
        placeSupportDiv
    );
    const placeSpan = createElements(
        "span",
        { class: "content-family" },
        placeSupportDiv
    );
    placeSpan.textContent = eventPlace;
    const timeSupportDiv = createElements("div", {},cadrBodyDiv);
    const timeImg = createElements(
        "img",
        { src: "./Asserts/image/home-page/events/clock.png", class: "me-3 my-1" },
        timeSupportDiv
    );
    const timeSpan = createElements(
        "span",
        { class: "content-family" },
        timeSupportDiv
    );
    timeSpan.textContent = eventTime;
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
    learnButton.textContent = "JOIN NOW";

    return parentDiv;
}

yourMemebersObj.slice(0,4).forEach((element) => {
    membersSection.appendChild(
        createYourMemebers(element.img, element.memName, element.memSubname)
    );
});

document.querySelector(".faithful-hearts-quote").textContent =
    faithfulHeartsObj.quote;
document.querySelector(".faithful-hearts-author").textContent =
    faithfulHeartsObj.author;

articleCarousalObj.forEach((element) => {
    articleSlider.appendChild(
        createArticleCarousal(
            element.url,
            element.churchName,
            element.churchDes,
            element.peopleImg
        )
    );
});

eventObj.forEach((ele) => {
    eventCarousal.appendChild(
        createEventNode(
            ele.url,
            ele.date,
            ele.place,
            ele.time,
            ele.eventName,
            ele.eventDes
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

articleNext.addEventListener("click", (ele) => {
    articleSlider.style.transform = `translateX(-${trans}%)`;
    trans += 33;
    articleSlider.style.transition = `0.3s all ease`;
});

subscribeToChurch.addEventListener("click", async () => {
    if (!subscribeCheckInput.checked)
        return alert("Please agree to terms and conditions");
    if (!subscribeChurchInput.value === "") return alert("Enter your e-mail");

    let emailObj = { email: subscribeChurchInput.value };
    const response = await fetch("http://localhost:8081/subscribe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(emailObj),
    });
});