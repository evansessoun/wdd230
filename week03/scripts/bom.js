const bookChap = document.querySelector("#favchap");
const bookList = document.querySelector("#list");
const addChap = document.querySelector("button");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function displayList(item) {
  const newList = document.createElement("li");
  const delButton = document.createElement("button");
  newList.textContent = item;
  delButton.textContent = "❌";
  newList.appendChild(delButton);
  bookList.appendChild(newList);

  delButton.addEventListener("click", () => {
    bookList.removeChild(newList);
    console.log(bookList);
    deleteChapter(item);
    bookChap.focus();
  });
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  let index = chaptersArray.indexOf(chapter);
  console.log(index);
  chaptersArray.splice(index, 1);
  setChapterList();
}

addChap.addEventListener("click", () => {
  if (!(bookChap.value == "")) {
    displayList(bookChap.value);
    chaptersArray.push(bookChap.value);
    setChapterList();
    bookChap.value = "";
  }
  bookChap.focus();
});
