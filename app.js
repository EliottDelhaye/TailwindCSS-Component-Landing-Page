const menuElementsToToggle = document.querySelectorAll(".toggle-menu");
const iconeToggle = document.querySelector(".icone-toggle");

const toggleMenu = () =>
  menuElementsToToggle.forEach((el) => el.classList.toggle("hidden"));

// Toggle class "hidden" on menu when button is clicked :
iconeToggle.addEventListener("click", toggleMenu);

// Toggle class "hidden" on menu when the user scrolls outside of the menu :
window.addEventListener("scroll", () => {
  if (!menuElementsToToggle[0].classList.contains("hidden")) {
    toggleMenu();
  }
});
