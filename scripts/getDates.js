const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=5.1225&lon=-1.2743&units=metric&appid=8af145c4aa774a82853be137a49c4304";

const pageVisit = document.querySelector("#visits");
const hamButton = document.querySelector("#menu");
const navbar = document.querySelector("#navbar");
const themeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cards = document.querySelector(".card");

const weatherIcon = document.querySelector("#weather-icon");
const weather = document.querySelector("#weather");
const area = document.querySelector("#location");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch {
    console.log("Error retrieving Weather Info");
  }
}

apiFetch();

function displayWeather(data) {
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
  );
  weatherIcon.setAttribute("alt", "Image of a weather icon");
  weather.innerHTML = `${data.main.temp} &deg;C - ${data.weather[0].description}`;
  area.textContent = `${data.name}`;
}

let date = new Date();
let year = date.getFullYear();
let lastModification = document.lastModified;
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

document.getElementById("year").innerHTML = `&copy; ${year}`;
document.getElementById(
  "lastModified"
).innerHTML = `Last Modification: ${lastModification}`;

if (numVisits !== 0) {
  pageVisit.textContent = numVisits;
} else {
  pageVisit.textContent = "Your first visit, Welcome";
}

numVisits++;

window.localStorage.setItem("numVisits-ls", numVisits);

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  navbar.classList.toggle("show");
});

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("activate");
  main.classList.toggle("activate");
  cards.classList.toggle("activate");
});
