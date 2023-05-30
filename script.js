let breakingImage = document.querySelector("#breakingImg");
let breakingNewsTitle = document.querySelector("#breakingNews .title");


/** API KEY*/
const apiKey = "191f38e21db040aea2148a0a1e4e09a1";

/*Async function to fetch data*/
const fetchData = async (categry,pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categry}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const data = await fetch(url);
    let response = await data.json();
    console.log(response);
    return response.articles;

}

/**Adding Flash newsImage to the Flash News Section */
const insertFlashNews = (data)=>{
    breakingImage.innerHTML = `<img src="${data[0].urlToImage}" alt="">`;
    breakingNewsTitle.innerHTML = `<h2>${data[0].content}</h2>`; // Adding Flash News Title to the page
}
fetchData('general',5).then(insertFlashNewsImage); 

