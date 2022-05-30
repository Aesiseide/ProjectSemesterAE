let menu = document.querySelector(".menu");
let header = document.querySelector("header");
//hide or show the menu after the menu button is clicked
menu.addEventListener("click", () => {
  header.classList.toggle("active");
});
