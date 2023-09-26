const bookChap = document.querySelector("#favchap");
const bookList = document.querySelector("#list");
const addChap = document.querySelector("button");

addChap.addEventListener("click", () => {
  if (!(bookChap.value == "")) {
    const newList = document.createElement("li");
    const delButton = document.createElement("button");
    newList.textContent = bookChap.value;
    delButton.textContent = "❌";
    newList.appendChild(delButton);
    bookList.appendChild(newList);
    bookChap.value = "";
    bookChap.focus();

    delButton.addEventListener("click", () => {
      bookList.removeChild(newList);
    });
  }
  bookChap.focus();
});
