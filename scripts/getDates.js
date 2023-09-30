const pageVisit = document.querySelector("#visits");
const hamButton = document.querySelector("#menu");
const navbar = document.querySelector("#navbar");
const themeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cards = document.querySelector(".card");

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
