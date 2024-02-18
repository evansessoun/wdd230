const baseURL = "https://evansessoun.github.io/wdd230/";
const membersURL =
  "https://evansessoun.github.io/wdd230/chamber/data/members.json";

const main = document.querySelector("main");
const gridbtn = document.querySelector("#grid");
const listbtn = document.querySelector("#list");
const table = document.createElement("table");
const tableSmall = document.createElement("table");
const page = document.createElement("div");
table.classList.add("large");
tableSmall.classList.add("small");

async function fetchAPI() {
  try {
    const response = await fetch(membersURL);
    if (response.ok) {
      const data = await response.json();
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
  const tbody = document.createElement("tbody");
  const tbodySmall = document.createElement("tbody");

  companies.forEach((company) => {
    const card = document.createElement("section");
    const compName = company.name;
    const compImage = document.createElement("img");
    compImage.setAttribute(
      "src",
      `https://evansessoun.github.io/wdd230/chamber/images/${company.icon}`
    );
    const address = document.createElement("p");
    address.textContent = `${company.address}`;
    const phone = document.createElement("p");
    const name = document.createElement("p");
    const website = document.createElement("a");
    const info = document.createElement("div");
    const tdName = document.createElement("td");
    const tdAddress = document.createElement("td");
    const tdPhone = document.createElement("td");
    const tdWebsite = document.createElement("td");
    const tr = document.createElement("tr");
    const trSmall = document.createElement("tr");
    website.setAttribute("href", `${company.websiteURL}`);
    website.textContent = `${company.websiteURL}`;
    phone.textContent = `${company.phone}`;
    name.textContent = `${company.name}`;
    /* Building Companies details as cards for display */
    card.appendChild(compImage);
    info.appendChild(address);
    info.appendChild(phone);
    info.appendChild(website);
    card.appendChild(info);
    info.innerHTML += "";

    /* infoTR is used to build table row for small screen table */
    const infoTr = info.prepend(name);

    tdName.textContent = `${compName}`;
    tr.appendChild(tdName);

    tdAddress.textContent = `${company.address}`;
    tr.appendChild(tdAddress);
    tdPhone.textContent = `${company.phone}`;
    tr.appendChild(tdPhone);
    tdWebsite.textContent = `${website}`;
    tr.appendChild(tdWebsite);
    const tdSmall = document.createElement("td");
    tdSmall.appendChild(name);
    tdSmall.appendChild(address);
    tdSmall.appendChild(phone);
    tdSmall.appendChild(website);
    trSmall.appendChild(tdSmall);
    tbody.appendChild(tr);
    tbodySmall.appendChild(trSmall);
    page.appendChild(card);
    page.classList.add("display-directory");
    main.appendChild(page);
  });
  table.appendChild(tbody);
  tableSmall.appendChild(tbodySmall);
}

listbtn.addEventListener("click", () => {
  try {
    page.classList.remove("display-directory");
    main.removeChild(page);
    main.appendChild(table);
    main.appendChild(tableSmall);
  } catch {}
});

gridbtn.addEventListener("click", () => {
  page.classList.add("display-directory");
  main.appendChild(page);
  try {
    main.removeChild(table);
    main.removeChild(tableSmall);
  } catch {}
});
