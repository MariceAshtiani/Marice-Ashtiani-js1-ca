const url = "https://api.punkapi.com/v2/beers";

const resultsContainer = document.querySelector(".results");

async function getBeers() {

    const response = await fetch(url);

    const results = await response.json();

    resultsContainer.innerHTML = "";

    for(let i = 0; i < results.length; i++) {
        console.log(results[i]);

        resultsContainer.innerHTML += `<div class="result">
                                        <a class="beer-specific" href="details.html?id=${results[i].id}">
                                        <h2>${results[i].name}</h2>
                                        <img src="${results[i].image_url}" alt="${results[i].name}" class="image"></img>
                                        <p>${results[i].tagline}</p>
                                        <p>${results[i].first_brewed}</p>
                                        </div>`;
    }

}

getBeers();