import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  console.log("From init()")
  console.log("http://65.0.171.83:8082/cities")

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
    const res= await fetch(config.backendEndpoint + "/cities");
    const data= await res.json();
    console.log(data)
    return data;
  }
  catch(e){
    console.log(e);
    return null;
  }

}



//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let landingElem= document.createElement("div")
  landingElem.className="col-6 col-lg-3 mb-4";

  landingElem.innerHTML=`
  <a href="pages/adventures/?city=${id}" id="${id}">
      <div class="tile"> 
        <div class="tile-text text-center">
          <h5>${city}</h5>
          <p>${description}</p> 
        </div>
        <img class="img-responsive" src="${image} alt="${id}"/>
      </div>
  </a>`;


  document.getElementById("data").append(landingElem);

}

  
  

export { init, fetchCities, addCityToDOM };
