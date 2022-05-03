const scrollUp = document.querySelector(".scroll-up");
const burger = document.querySelector("#burger-menu"); //Burger-menu
const ul = document.querySelector("nav ul"); //nav-ul
const nav = document.querySelector("nav"); //nav
const navLinks = document.querySelectorAll(".nav-link");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
