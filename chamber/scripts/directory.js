const baseURL = "https://evansessoun.github.io/wdd230/";
const membersURL =
  "https://evansessoun.github.io/wdd230/chamber/data/members.json";

const display = document.querySelector("#display");

async function fetchAPI() {
  try {
    const response = await fetch(membersURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const companies = data.companies;
      displayCard(companies);
    } else {
      throw Error(response.text());
    }
  } catch {
    console.log("Error retrieving data");
  }
}

fetchAPI();

function displayCard(companies) {
  companies.forEach((company) => {
    const compName = company.name;
    console.log(compName);
    const compImage = document.createElement("img");
    const card = document.createElement("section");
    compImage.setAttribute(
      "src",
      `https://evansessoun.github.io/wdd230/chamber/images/${company.icon}`
    );
    const address = document.createElement("p");
    address.textContent = `${company.address}`;
    const phone = document.createElement("p");
    phone.textContent = `${company.phone}`;
    const website = document.createElement("a");
    website.setAttribute("href", `${company.websiteURL}`);
    card.appendChild(compImage);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    display.appendChild(card);
  });
}
