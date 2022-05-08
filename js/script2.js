const detailContainer = document.querySelector(".beer-details");

const title = document.querySelector(".details");

const header = document.querySelector(".main-header");

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

     title.innerHTML = `${details[0].name}`;       
     header.innerHTML = `<h1>${details[0].name}</h1>`;

    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }

}

fetchBeer();



function createHtml(details) {
    detailContainer.innerHTML = `<div class="single-result">
                                    <h2>${details[0].tagline}</h2>
                                    <p>First brewed: ${details[0].first_brewed}</p>
                                    <img src="${details[0].image_url}" alt="${details[0].name}" class="image"></img>
                                    <p>${details[0].description}</p>
                                    <h3>Goes well with: </h3>
                                    <p>${details[0].food_pairing}</p>
                                </div>`;
}