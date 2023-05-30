let breakingImage = document.querySelector("#breakingImg");

let breakingNewsTitle = document.querySelector("#breakingNews .title");

let breakingNewsDesc = document.querySelector("#breakingNews .description");


/** API KEY*/
const apiKey = "191f38e21db040aea2148a0a1e4e09a1";

/*Async function to fetch data*/
const fetchData = async (categry,pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${categry}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const data = await fetch(url);
    let response = await data.json();
    console.log(response);
    return response.articles;

}

/**Adding Flash news to the Flash News Section */
const insertFlashNews = (data)=>{
    breakingImage.innerHTML = `<img src="${data[0].urlToImage}" alt="">`;//Addidng Flash news Image to the flash news section
    breakingNewsTitle.innerHTML = `<h2>${data[0].content}</h2>`; // Adding Flash News Title to the page
    breakingNewsDesc.innerHTML =`${data[0].description}`;
}
fetchData('general',5).then(insertFlashNews); 

