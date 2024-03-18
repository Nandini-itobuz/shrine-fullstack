async function fetchData(url) {
    try {
      const rawData = await fetch(url);
      return await rawData.json();
    } catch (err) {
      console.log(err);
    }
  }

const {dataBlog} = await fetchData("http://localhost:8081/blog")
const getBlogSection = document.querySelector('.blog-section');

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
    eventName,
    eventDesc,
    eventDetails
  ) {
    const parentDiv = createElements("div", { class: "col-xl-6 col-sm-6  mt-5" });
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
      { class: "fw-bold fs-6 conent-family" },
      cardBodyDiv
    );
    dateDiv.textContent = eventDate;
    const eventNameDiv = createElements(
      "h4",
      { class: "card-title mt-4 heading-family fs-5" },
      cardBodyDiv
    );
    eventNameDiv.textContent = eventName;
    const eventDescDiv = createElements(
      "p",
      { class: "card-text content-family ",  style : "font-size: 0.9rem" },
      cardBodyDiv
    );
    eventDescDiv.textContent = eventDesc;
    const anchorNode = createElements(
      "a",
      { class: "btn all-buttons py-3 px-4 ", href: `./BlogDetails.html?id=${id}`},
      cardBodyDiv,
      () => setEvent(eventDetails)
    );
    anchorNode.textContent = " READ MORE";
    return parentDiv;
}


dataBlog.forEach(element =>{
    getBlogSection.prepend(createEventNodes(element.id, element.url, element.date,element.blogName,element.blogDesc, element));
})

document.getElementsByClassName('button-pagination')[1].addEventListener('click',async ()=>{
    const {dataBlog} = await fetchData("http://localhost:8081/blog?page=2&limit=3");
    getBlogSection.innerHTML = ""
    dataBlog.forEach(element =>{
        getBlogSection.prepend(createEventNodes(element.id, element.url, element.date,element.blogName,element.blogDesc, element));
    })
})