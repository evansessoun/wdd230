const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=8af145c4aa774a82853be137a49c4304";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch {
    console.log("Error accessing the WeatherAPI");
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp} &deg;F`;
  /* const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; */
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "Image of a weather icon");
  captionDesc.textContent = `${data.weather[0].description}`;
}
