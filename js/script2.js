const detailContainer = document.querySelector(".beer-details");

const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);



const url = "https://api.punkapi.com/v2/beers/" + id;

console.log(url);

async function fetchBeer() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }

}

fetchBeer();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="result">
                                    <h2>${details[0].name}</h2>
                                    <img src="${details[0].image_url}" alt="${details[0].name}" class="image"></img>
                                    <p>${details[0].tagline}</p>
                                    <p>${details[0].first_brewed}</p>
                                    </div>`;
}