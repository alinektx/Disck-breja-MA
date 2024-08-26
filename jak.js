let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggleMenuIcon();
});

function toggleMenuIcon() {
  if (menuIcon.classList.contains("bx-menu")) {
    menuIcon.classList.remove("bx-menu");
    menuIcon.classList.add("bx-x");
  } else {
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
  }
}