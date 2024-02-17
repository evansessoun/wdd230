const baseURL = "https://evansessoun.github.io/wdd230/";
const membersURL =
  "https://evansessoun.github.io/wdd230/chamber/data/members.json";

async function fetchAPI() {
  try {
    const response = await fetch(membersURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw Error(response.text());
    }
  } catch {
    console.log("Error retrieving data");
  }
}
