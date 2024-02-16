const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  const prophets = data.prophets;
  //console.table(data.prophets);
  //console.log(data.prophets[0].lastname);
  displayProphets(prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const birthDate = document.createElement("h4");
    const birthPlace = document.createElement("h4");
    const potrait = document.createElement("img");
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    potrait.setAttribute("src", prophet.imageurl);
    potrait.setAttribute(
      "alt",
      `Protrait of ${prophet.name} ${prophet.lastname}`
    );
    potrait.setAttribute("loading", "lazy");
    potrait.setAttribute("width", "340");
    potrait.setAttribute("height", "440");
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(potrait);
    cards.appendChild(card);
  });
};
