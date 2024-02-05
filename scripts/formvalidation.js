const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");
const ratings = document.querySelector("#rate-display");
const slider = document.querySelector("#rating");
const submitBtn = document.querySelector("#submit");
const warning = document.querySelector("#warning");
const navbar = document.querySelector("#navbar");
const hamButton = document.querySelector("#menu");

pass2.addEventListener("focusout", () => {
  let passValue1 = pass1.value;
  let passValue2 = pass2.value;
  if (!(passValue1 == passValue2)) {
    /* warning.style.visibility = "visible"; */
    warning.style.display = "block";
    pass2.value = "";
  } else {
    /* warning.style.visibility = "hidden"; */
    warning.style.display = "none";
  }
});

slider.addEventListener("change", () => {
  ratings.textContent = `${slider.value}`;
});

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("open");
  navbar.classList.toggle("show");
});
