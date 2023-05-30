let breakingImage = document.querySelector("#breakingImg");

let breakingNewsTitle = document.querySelector("#breakingNews .title");

let breakingNewsDesc = document.querySelector("#breakingNews .description");

let topHeadlines = document.querySelector(".topNews");

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
    let random = Math.floor(Math.random() * 5);
    breakingImage.innerHTML = `<img src="${data[random].urlToImage}" alt="">`;//Addidng Flash news Image to the flash news section
    breakingNewsTitle.innerHTML = `<a href=${data[random].url} target="_blank">
        <h2>${data[random].content}</h2>
    </a>`; // Adding Flash News Title to the page
    breakingNewsDesc.innerHTML =`${data[random].description}`;
}
fetchData('general',5).then(insertFlashNews); 


/**Function For Inserting News to the Top Headlines Section */
const insertTopHeadlines =  (data)=>{
    let htmlData = '';
    let title = '';
    data.forEach((item)=>{
        if(item.title.length < 100){
            title = item.title;
        }
        else{
            title = item.title.slice(0,100) + "...";
        }
        htmlData = 
        `<div class="news">
            <div class="img">
                <img src=${item.urlToImage} alt="to_headline Image">
            </div>
            <div class = "text">
                <div class="title">
               <a href = ${item.url} target="_blank"><p>${title}</p></a>
                </div>
            </div>
        </div>`;
    
});
topHeadlines.innerHTML = htmlData;
}
    fetchData('general',20).then(insertTopHeadlines);


