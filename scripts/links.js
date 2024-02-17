const baseURL = "https://evansessoun.github.io/wdd230/";
const linksURL = "https://evansessoun.github.io/wdd230/data/links.json";

const activityCard = document.querySelector("#activities");

async function getLinks() {
  const response = await fetch(linksURL);
  try {
    if (response.ok) {
      const data = await response.json();
      displayLinks(data);
    } else {
      throw Error(await response.text());
    }
  } catch {
    console.log("Error retrieving data");
  }
}

function displayLinks(data) {
  const weeks = data.weeks;
  const ulList = document.createElement("ul");
  const activityHeader = document.createElement("h3");
  activityHeader.textContent = "Learning Activities";
  activityCard.appendChild(activityHeader);
  weeks.forEach((weekNo) => {
    let weekName = weekNo.week;
    const list = document.createElement("li");
    const weekLinks = weekNo.links;
    const weekLabel = document.createElement("label");
    weekLabel.textContent = `${weekName}: `;
    list.appendChild(weekLabel);
    weekLinks.forEach((link) => {
      let activitURL = link.url;
      let activityName = link.title;
      const linker = document.createElement("a");
      linker.textContent = `${activityName}`;
      linker.setAttribute("href", `${activitURL}`);
      list.appendChild(linker);
      list.append(" | ");
    });
    ulList.appendChild(list);
    activityCard.appendChild(ulList);
  });
}

getLinks();
