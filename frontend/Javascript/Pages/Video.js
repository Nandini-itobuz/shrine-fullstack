const getVideoSection = document.querySelector('.video-section');

function createVideoCards( videoUrl, videoHeading){
    return ` <div class="d-flex flex-column gap-3 col-lg-4 col-sm-6 px-3 mt-3 ">
    <img src=${videoUrl} class = "w-100 h-75">
    <p class="fw-semibold heading-family fs-5 ">${videoHeading}</p>
    </div>`
}




async function fetchData(url) {
    try {
      const rawData = await fetch(url);
      return await rawData.json();
    } catch (err) {
      console.log(err);
    }
  }

const resObj = await fetchData('http://localhost:8081/video')
const allVideoData = resObj.dataVideo;

allVideoData.forEach(element => {
    getVideoSection.insertAdjacentHTML("beforeend",createVideoCards(element.url,element.name))
});