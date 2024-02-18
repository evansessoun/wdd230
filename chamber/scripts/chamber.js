const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=5.1225&lon=-1.2743&units=metric&appid=8af145c4aa774a82853be137a49c4304";

const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=5.1225&lon=-1.2743&units=metric&appid=8af145c4aa774a82853be137a49c4304";

const hamButton = document.querySelector("#ham-button");
const navbar = document.querySelector("#navbar");

const weatherIcon = document.querySelector("#weather-icon");
const weather = document.querySelector("#weather");
const area = document.querySelector("#location");
const casted = document.querySelector("#scrolltable");

const forecastTable = document.createElement("table");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  navbar.classList.toggle("show");
});

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

async function apiFetchSec() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch {
    console.log("Error retrieving Weather Info");
  }
}

apiFetchSec();

function displayForecast(data) {
  const dataList = data.list;
  const tbody = document.createElement("tbody");
  dataList.forEach((forecast) => {
    const tr = document.createElement("tr");
    const temp = forecast.main.temp;
    const timeDate = forecast.dt_txt;
    tr.innerHTML = `${temp} &deg;C   ---  ${timeDate}`;
    tbody.appendChild(tr);
  });
  forecastTable.appendChild(tbody);
  casted.appendChild(forecastTable);
}
