let date = new Date();
let year = date.getFullYear();
let lastModification = document.lastModified;

document.getElementById("year").innerHTML = `&copy; ${year}`;
document.getElementById(
  "lastModified"
).innerHTML = `Last Modification: ${lastModification}`;
