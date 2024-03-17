const { eventObj } = await fetchData("http://localhost:8081/events");
const getEventSection = document.querySelector(".event-section");

async function fetchData(url) {
  try {
    const rawData = await fetch(url);
    return await rawData.json();
  } catch (err) {
    console.log(err);
  }
}

function createElements(elementName, obj, parentElement,onclickFunction) {
  const node = document.createElement(elementName);

  if (onclickFunction) {
    node.addEventListener('click', onclickFunction);
  }
  Object.entries(obj).forEach((ele) => {
    node.setAttribute(ele[0], ele[1]);
  });

  if (parentElement !== undefined) {
    parentElement.appendChild(node);
  }
  return node;
}


function createEventNodes(
  id,
  urlImg,
  eventDate,
  eventTime,
  eventPlace,
  eventName,
  eventDesc,
  eventDetails
) {
  const parentDiv = createElements("div", { class: "col-xl-4 col-md-6  mt-5" });
  const parentWrapperDiv = createElements("div", { class: "card" }, parentDiv);
  const imgNode = createElements(
    "img",
    { src: urlImg, class: "card-img-top" },
    parentWrapperDiv
  );
  const cardBodyDiv = createElements(
    "div",
    { class: "card-body" },
    parentWrapperDiv
  );
  const dateDiv = createElements(
    "h5",
    { class: "fw-bold fs-5 conent-family" },
    cardBodyDiv
  );
  dateDiv.textContent = eventDate;
  // const supportDivVenue = createElements('div',{class: 'd-flex flex-column justify-content-around '},cardBodyDiv);
  // const timeSpan = createElements('span',{class:'d-inline-block'},supportDivVenue);
  // const timeImg = createElements('img',{src: '../Asserts/image/home-page/events/clock.png',timeSpan});
  // const timeText = createElements('span',{class: 'fs-6 content-family'},timeSpan);
  // timeText.textContent = eventTime;
  // const placeSpan = createElements('span',{class:'spanDiv'},supportDivVenue);
  // const placeImg = createElements('img',{src: '../Asserts/image/home-page/events/clock.png',placeSpan});
  // const placeText = createElements('span',{class: 'content-family'},placeSpan);
  // placeText.textContent = eventPlace;
  const eventNameDiv = createElements(
    "h4",
    { class: "card-title mt-4 heading-family" },
    cardBodyDiv
  );
  eventNameDiv.textContent = eventName;
  const eventDescDiv = createElements(
    "p",
    { class: "card-text content-family mt-md-4 mt-2" },
    cardBodyDiv
  );
  eventDescDiv.textContent = eventDesc;
  const anchorNode = createElements(
    "a",
    { class: "btn all-buttons py-3 px-4 mt-md-4 mt-2", href: `./EventDetails.html?id=${id}`},
    cardBodyDiv,
    () => setEvent(eventDetails)
  );
  anchorNode.textContent = "JOIN NOW";
  return parentDiv;
}

eventObj.forEach((ele) => {
  console.log(ele.id)
  getEventSection.appendChild(
    createEventNodes(
      ele.id,
      ele.url,
      ele.date,
      ele.time,
      ele.place,
      ele.eventName,
      ele.eventDes,
      ele
    )
  );
});


async function setEvent(eventD){
  let emailObj = { data: eventD };
    const response = await fetch("http://localhost:8081/currentevent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(emailObj),
    });
    console.log(response);
}


