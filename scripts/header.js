let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let docContent = document.querySelector(".doc-content");

menu.addEventListener("click", () => {
  let menuIcon = document.getElementById("menu-icon");
  if (menuIcon.classList.contains("bi-list")) {
    menuIcon.classList.replace("bi-list", "bi-x");
    console.log("if case " + menuIcon.classList);
  } else {
    menuIcon.classList.replace("bi-x", "bi-list");
    console.log("else case " + menuIcon.classList);
  }
  sidebar.classList.toggle("sidebar-active");
  docContent.classList.toggle("hide-doc");
});
