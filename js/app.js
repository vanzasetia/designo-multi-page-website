(function () {
  "use strict";
  const body = document.body;
  const menuButton = document.querySelector(".js-menu-button");
  const menuButtonIcon = menuButton.querySelector(".js-menu-button-icon");
  const landmarkElements = document.querySelectorAll(".js-landmark");
  const onLargeScreen = window.matchMedia("(min-width: 40.625em)");

  const trapFocusOnNav = () => {
    landmarkElements.forEach((landmark) => landmark.setAttribute("inert", ""));
  };

  const removeInertAttributes = () => {
    landmarkElements.forEach((landmark) => landmark.removeAttribute("inert"));
  };

  const openMenu = () => {
    menuButton.setAttribute("aria-expanded", "true");
    menuButtonIcon.src = "/svg/icon-close.svg";
    body.classList.add("is-menu-open");
    trapFocusOnNav();
  };

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButtonIcon.src = "/svg/icon-hamburger.svg";
    body.classList.remove("is-menu-open");
    removeInertAttributes();
  };

  const toggleMenu = () => {
    const isMenuOpen = menuButton.getAttribute("aria-expanded") === "true";
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuButton.addEventListener("click", toggleMenu);
  onLargeScreen.addEventListener("change", closeMenu);
})();
