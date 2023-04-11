
const sign_out = document.querySelector(".sign_out");

sign_out.addEventListener("click" , () => {
  localStorage.setItem("isAuth" , "false");
  window.open("../register.html" , "_self");
  localStorage.clear();
})

const regionRoutes = [
  {
    id:1,
    caption:"Africa",
    route:"africa"
  },
  {
    id:2,
    caption:"Americas",
    route:"americas"
  },
  {
    id:3,
    caption:"Asia",
    route:"asia"
  },
  {
    id:4,
    caption:"Europe",
    route:"europe"
  },
  {
    id:5,
    caption:"Oceania",
    route:"oceania"
  },
  {
    id:6,
    caption:"All",
    route:"all"
  }
]

const navbar_list = document.querySelector(".navbar_list");
const row = document.querySelector('.row');

function getRoute(route , cb) {
  fetch(`https://restcountries.com/v3.1/${route}`)
    .then(res => res.json())
    .then(res => cb(res))
};

const typeFilter = {
  all: "all",
  region: "region",
  name: "name"
}

window.addEventListener("load" , () => {
  const newArr = regionRoutes.map(item => Lists.bind(item)())
  const newCard = getRoute(typeFilter.all , res => card.call(res))

  navbar_list.innerHTML = newArr.join(" ")
  row.innerHTML = newCard
})

function Lists() {
  return `
    <li onClick=getData('${this.route}')>
      ${this.caption}
    </li>
  `
}

function getData(route) {
  const mode = ["africa", "americas", "asia", "europe", "oceania"];

  mode.includes
    && getRoute(`${typeFilter.region}/${route}` , res => card.call(res))
}

function card() {
  const template = this.map(item => {
    return `
      <div class="card">
        <h2>${item.name.common}</h2>
        <img src=${item.flags.png} alt="">
        <button onclick="moreCountry('${item.name.common}')">More</button>
      </div>
    `
  }).join(" ")
  row.innerHTML = template
}

const moreRow = document.querySelector(".row");

function moreCountry(route) {
  getRoute(`${typeFilter.name}/${route}` , res => moreCard.bind(res)())
}

function moreCard() {
  const template = this.map(item => {
    return `
      <div class="cards">
        <div class="moreCard">
          <div>        
            <span>Name:</span> <h2>${item.name.common}</h2>
          </div>
          <div>
            <span>Capital:</span> <h3> ${item.capital}</h3>
          </div>
          <div>        
            <span>Region:</span> <h3 ${item.region}</h3>
          </div>
          <div>
            <span>Start of week:</span><h3> ${item.startOfWeek}</h3>
          </div>
          <div>
            <span>Status:</span><h3> ${item.status}</h3>
          </div>
          <div>
            <span>Subregion:</span><h3> ${item.subregion}</h3>
          </div>
          <div>        
            <span>altSpellings:</span><h3> ${item.altSpellings}</h3>
          </div>
          <div>       
            <span>Area:</span><h3> ${item.area}</h3>
          </div>
          <div>        
            <span>Population:</span><h3> ${item.population}</h3>
          </div>
          <div>        
            <span>Continent:</span><h3> ${item.continents}</h3>
          </div>
          <div>        
            <span>Demonym:</span><h3> ${item.demonyms.eng.f}</h3>
          </div>
          <div>       
            <span>Independent:</span><h3> ${item.independent}</h3>
          </div>
          <div>
            <span>Languages:</span><h3> ${item.languages.nld}</h3>
          </div>
        </div>
        <div  class="cardImg">
          <img src="${item.flags.png}"/>
          <img src="${item.coatOfArms.png}"/>

        </div>
      </div>
      </div>    
    `
  }).join(" ")
  moreRow.innerHTML = template;
}

window.addEventListener("load" , () => {
  const users = JSON.parse(localStorage.getItem("users"));

  const isIMG = users.filter(item => item.id === item.id);

  cardImg.bind(isIMG)()
})

const user = document.querySelector(".user");

function cardImg() {
  const template = this.map(item => {
    return `
      <div class="users">
        <span>Username:</span><p>${item.username}</p>
      </div>
    `
  })
  user.innerHTML = template;
}