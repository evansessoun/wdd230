const hamButton = document.querySelector("#ham-button");
const navbar = document.querySelector("#navbar");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  navbar.classList.toggle("show");
});
