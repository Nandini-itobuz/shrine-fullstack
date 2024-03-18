const getAllTab = document.getElementById("all-tab");
const getChurchTab = document.querySelector(".church-tab");
const getDonationTab = document.querySelector(".donation-tab");
const getCharityTab = document.querySelector(".charity-tab");
const getEducationTab = document.querySelector(".education-tab");
const { dataGallery } = await fetchData("http://localhost:8081/gallery");

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

function filterImages(parentElement, typeOfFilter, imgObjSearch) {

  const imgFiltered = imgObjSearch.filter((ele) => ele.type === typeOfFilter);
  imgFiltered.forEach((ele) => {
    createElements(
      "img",
      { src: ele.imgUrl, class: "col-lg-4 col-sm-6 p-lg-3 mt-2" },
      parentElement
    );
  });
}

filterImages(getCharityTab, "charity", dataGallery);
filterImages(getDonationTab, "donation", dataGallery);
filterImages(getEducationTab, "education", dataGallery);
filterImages(getChurchTab, "church", dataGallery);

dataGallery.forEach((ele) => {
  createElements(
    "img",
    { src: ele.imgUrl, class: "col-lg-4 col-sm-6 p-lg-3 mt-2" },
    getAllTab
  );
});
