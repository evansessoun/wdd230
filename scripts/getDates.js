const pageVisit = document.querySelector("#visits");

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
