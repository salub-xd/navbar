let menu = document.querySelector(".menu");
let dropDownMenu = document.querySelector(".dropdown_menu");
let menuIcon = document.querySelector(".menu i");

menu.addEventListener("click", () => {
//   console.log("clicked");
  dropDownMenu.classList.toggle("open");
  let isOpen = dropDownMenu.classList.contains("open");
  menuIcon.classList = isOpen
    ? `fa-solid fa-xmark fa-1x activeData`
    : `fa fa-bars aria-hidden="true`;
});