let {dataBlog} = await fetchData("http://localhost:8081/blog");
const currentHref= window.location.href;
const idIndex = currentHref.indexOf('id=');
const idSubstring = currentHref.substring(idIndex);
const idArray = idSubstring.split('&');
const idValue = idArray[0].split('=')[1];
const objRecived = dataBlog.find(ele => ele.id === idValue);
const blogDetailsSection = document.querySelector('.blog-details');
const quoteSection = document.querySelector('.quote');
const commentContainer = document.querySelector('.comment-cards-container');
const buildTags = document.querySelector('.comment-tags');
const getPostButton = document.querySelector('.post-comment');
const commentBox = document.querySelector('.comment-box');
const nameBox = document.querySelector('.name-box');
const {blogComments} = objRecived;
const {tags} = objRecived;

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

function createBlog(objToDisplay){
  const parentDiv = createElements('div',{class : 'heading-text'},blogDetailsSection);
  parentDiv.textContent = objToDisplay.blogName;
  const supportDiv = createElements('p', {class:'content-family my-5'}, blogDetailsSection);
  supportDiv.textContent = objToDisplay.blogBrief;
  quoteSection.textContent = objToDisplay.blogQuote;
}

function createCommentCards(comment,name){
const parentDiv = createElements('div',{class:  ' blog-comments row gap-5 py-5 d-flex justify-content-center  align-items-center '} )
const imgDiv = createElements('div', {class :'col-lg-3'}, parentDiv);
const personImg = createElements('img', {src: './Asserts/image/pages/blogs/person.png', class: 'ms-lg-5'}, imgDiv);
const commentDiv = createElements('div', {class : 'col-lg-8 col-12 content-family'}, parentDiv)
commentDiv.textContent = comment;
const nameDiv = createElements('p',{class : 'text-black fw-bold content-family my-2'}, commentDiv);
nameDiv.textContent = name;
return parentDiv;
}

function createTags(tag, build){
  const button =  createElements('button',{ class: 'all-buttons text-black bg-white border border-black p-2 m-2'},build);
  button.textContent = tag;
}

createBlog(objRecived);
blogComments.forEach(element=>{
  commentContainer.appendChild(createCommentCards(element.comment,element.name))
})

tags.forEach(element =>{
  createTags(element,buildTags)
})

getPostButton.addEventListener("click", async () => {
  if (commentBox.value === "") return alert("Comment box is blank");
  if (nameBox.value === "") return alert("Enter your name")
  let commentObj = { name:nameBox.value, comment: commentBox.value , eventId : idValue};
  const response = await fetch("http://localhost:8081/blog/getComment", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(commentObj),
  });

  console.log(await fetchData("http://localhost:8081/blog"));
});