//Initialization starts

let breakingImage = document.querySelector("#breakingImg");

let breakingNewsTitle = document.querySelector("#breakingNews .title");

let breakingNewsDesc = document.querySelector("#breakingNews .description");

let topHeadlines = document.querySelector(".topNews");

let sportsNewsBox = document.querySelector("#sportsNews .newsBox");

let businessNewsBox = document.querySelector("#businessNews .newsBox");

let techNewsBox = document.querySelector("#techNews .newsBox");

let fallbackImageUrl = "./Assets/no-preview-available.png"; //If the API Fails to load an image, then this default image will be diaplayed
//Initialization Ends


/** API KEY*/
const apiKey = "64c6bd38e1e946fc9c48788af137509d";

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
    let imageUrl = data[random].urlToImage ? data[random].urlToImage : fallbackImageUrl;
     breakingImage.innerHTML = `<img src=${imageUrl} alt="">`;
     breakingNewsTitle.innerHTML = `<a href=${data[random].url} target="_blank"><h2>${data[random].title}</h2></a>`;
     breakingNewsDesc.innerHTML = data[random].description;
}
fetchData('general',5).then(insertFlashNews);


/**Function For Inserting News to the Top Headlines Section */
const insertTopHeadlines =  (data)=>{
    
    let htmlData = '';
    let title = '';

    data.forEach((item) => {
          let title = item.title.length < 100 ? item.title : item.title.slice(0, 100) + "...";
          let imageUrl = item.urlToImage ? item.urlToImage : fallbackImageUrl;
          
          htmlData += `
          <div class="news">
          <div class="img">
          <img src="${imageUrl}" alt="to_headline Image">
                </div>
                <div class="text">
                  <div class="title">
                    <a href="${item.url}" target="_blank">
                      <p>${title}</p>
                    </a>
                    </div>
                    </div>
                    </div>`;
                  });
                  
                  topHeadlines.innerHTML = htmlData;
                };

fetchData('general',15).then(insertTopHeadlines);

//Inserting News to respective Categories

// Function to insert news for sports category
const insertSportsNewsBox = (data) => {
    let htmlData = "";
    data.forEach((item) => {
    let imageUrl = item.urlToImage ? item.urlToImage : fallbackImageUrl;
    htmlData += `
      <div class="newsCard">
        <img src="${imageUrl}" alt="">
        <div class="text">
          <div class="title">
            <a href="${item.url}" target="_blank">
              <p>${item.title}</p>
            </a>
          </div>
        </div>
      </div>`;
    });
    sportsNewsBox.innerHTML = htmlData;
  };

 // Function to insert news for business category
const insertBusinessNewsBox = (data) => {
  let htmlData = "";
  data.forEach((item) => {
    let imageUrl = item.urlToImage ? item.urlToImage : fallbackImageUrl;
    htmlData += `
      <div class="newsCard">
        <img src="${imageUrl}" alt="">
          div class="text">
          <div class="title">
            <a href="${item.url}" target="_blank">
              <p>${item.title}</p>
            </a>
         </div>
       </div>
     </div>`;
    });
  businessNewsBox.innerHTML = htmlData;
 };

  // Function to insert news for tech category
const insertTechNewsBox = (data) => {
  let htmlData = "";
  data.forEach((item) => {
    let imageUrl = item.urlToImage ? item.urlToImage : fallbackImageUrl;
    htmlData += `
      <div class="newsCard">
        <img src="${imageUrl}" alt="">
        <div class="text">
          <div class="title">
            <a href="${item.url}" target="_blank">
              <p>${item.title}</p>
            </a>
          </div>
        </div>
      </div>`;
    });
    techNewsBox.innerHTML = htmlData;
  };
  fetchData('sports', 10).then(insertSportsNewsBox);
  fetchData('business', 10).then(insertBusinessNewsBox);
  fetchData('technology', 10).then(insertTechNewsBox);