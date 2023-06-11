let search = "Telsa";

const newsContainer = document.querySelector(".news-container");
// const searchButton = document.querySelector(".search-button");
const sumbit = document.querySelector(".submit");

sumbit.addEventListener("click", (event) => {
  event.preventDefault();
  const inputKeyword = document.querySelector(".input-keyword").value;
  console.log(inputKeyword);

  search = inputKeyword.length > 0 ? inputKeyword : "Indonesia";

  getData(search);
});

let cards = "";
let data = [];

const getData = (search) => {
  cards = `<h1>Loading...</h1>`;

  setTimeout(() => {
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2023-05-11&sortBy=publishedAt&apiKey=36b33e03afe7475e9bfd7fb418154a71`)
      .then((response) => response.json())
      .then((res) => {
        data = res.articles;
        cards = "";

        data.forEach((element) => {
          cards += `
        <div class="col-md-4 my-2">
        <div class="card h-100">
        <img src="${element.urlToImage}" class="card-img-top" style="width: 355px; height: 230px">
        <div class="card-body">
        <h5 class="card-title">${element.aouthor}, ${element.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${element.publishedAt}</h6>
        <p class="card-text">${element.description}</p>
        <a href="${element.url}" class="btn btn-primary" target="_blink">Read more...</a>
        </div>
        </div>
        </div>
        `;
        });
        newsContainer.innerHTML = cards;
      }, 1000);

    newsContainer.innerHTML = cards;
  });
};

getData(search);
