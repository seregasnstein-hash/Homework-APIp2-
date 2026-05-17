const movieContainer = document.querySelector(".movies");

export function getMovies() {
  let xhr = new XMLHttpRequest();
  let url = "https://www.omdbapi.com/?apikey=caed8981&s=lord+of+the+rings";
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.log("Ошибка сервера", xhr.status);
      return;
    }

    let data = JSON.parse(xhr.responseText);

    if (data.Response === "False") {
      console.log("Фильмы не найдены", data.Error);
      return;
    }
        let arrMovies = data.Search;
        console.log(arrMovies);
        arrMovies.forEach(element => {
            let divCard = document.createElement("div");
            divCard.classList.add("movies__card")
            let imgCard = document.createElement("img");
            imgCard.classList.add("movies__card-img")
            const poster = element.Poster !== "N/A" ? element.Poster : "./img/no_image.png";
            imgCard.src = poster;
            imgCard.onerror = () => {
                imgCard.src = "./img/no_image.png"
            }
            let titleCard = document.createElement("h3");
            titleCard.classList.add("movies__card-title");
            titleCard.textContent = element.Title;
            let yearCard = document.createElement("p");
            yearCard.classList.add("movies__card-year");
            yearCard.textContent = element.Year;

            divCard.appendChild(imgCard);
            divCard.appendChild(titleCard);
            divCard.appendChild(yearCard);

            movieContainer.appendChild(divCard)
        });

  };

  xhr.onerror = function () {
    console.log("Ошибка сети. Проверьте интернет или сервер.");
  };
  xhr.send();
}
