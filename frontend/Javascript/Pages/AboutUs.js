const statsClass = document.getElementsByClassName('stats');

const dataAboutUsObj  = await fetchData("http://localhost:8081/aboutus");
const statsAboutUs = dataAboutUsObj.dataAboutUs;

async function fetchData(url){
    try{
        const rawData =  await fetch(url);
        return await rawData.json();
    }catch(err){
        console.log(err);
    }
}

function showStats (element, findObj){
    element.textContent =statsAboutUs[findObj]+"+";
    if(findObj === 'donations'){
        element.textContent ='$'+statsAboutUs[findObj]+"+";
    }
}


for(let index=0;index< statsClass.length;index++){
    showStats(statsClass[index], statsClass[index].dataset.statsType);
}




