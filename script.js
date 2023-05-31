//Initialization Starts

let breakingImage = document.querySelector("#breakingImg");

let breakingNewsTitle = document.querySelector("#breakingNews .title");

let breakingNewsDesc = document.querySelector("#breakingNews .description");

let topHeadlines = document.querySelector(".topNews");

let sportsNewsBox = document.querySelector("#sportsNews .newsBox");

let businessNewsBox = document.querySelector("#businessNews .newsBox");

let techNewsBox = document.querySelector("#techNews .newsBox");

let fallbackImageUrl = "./InfoSphere/no-preview-available.png"; //If the API Fails to load an image, then this default image will be diaplayed

//Initialization Ends

//API Key
const apiKey = "64c6bd38e1e946fc9c48788af137509d";

// async Function to fetch data
const fetchData = async (category, pageSize) => {
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
};

// Function to insert flash news
const insertFlashNews = (data) => {
  let random = Math.floor(Math.random() * 5);
  let imageUrl = data[random].urlToImage ? data[random].urlToImage : fallbackImageUrl;
  breakingImage.innerHTML = `<img src="${imageUrl}" alt="">`;
  breakingNewsTitle.innerHTML = `<a href="${data[random].url}" target="_blank"><h2>${data[random].title}</h2></a>`;
  breakingNewsDesc.innerHTML = data[random].description;
};

// Function to insert top headlines
const insertTopHeadlines = (data) => {
    let htmlData = '';
  
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
        <div class="text">
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

// Fetch data and insert news in respective areas
fetchData('general', 5).then(insertFlashNews);
fetchData('general', 15).then(insertTopHeadlines);
fetchData('sports', 10).then(insertSportsNewsBox);
fetchData('business', 10).then(insertBusinessNewsBox);
fetchData('technology', 10).then(insertTechNewsBox);