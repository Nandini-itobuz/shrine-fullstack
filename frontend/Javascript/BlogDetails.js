async function fetchData(url) {
    try {
      const rawData = await fetch(url);
      return await rawData.json();
    } catch (err) {
      console.log(err);
    }
  }

const {dataBlog} = await fetchData("http://localhost:8081/blog")
console.log(dataBlog, window.location.href);

const currentHref= window.location.href;
const idIndex = currentHref.indexOf('id=');
const idSubstring = currentHref.substring(idIndex);
const idArray = idSubstring.split('&');
const idValue = idArray[0].split('=')[1];
const objToDisplay = dataBlog.find(ele => ele.id === idValue);

console.log(idValue);