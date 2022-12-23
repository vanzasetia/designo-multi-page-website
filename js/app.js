(function () {
  "use strict";
  const body = document.body;
  const menuButton = document.querySelector(".js-menu-button");
  const menuButtonIcon = menuButton.querySelector(".js-menu-button-icon");
  const landmarkElements = document.querySelectorAll(".js-landmark");
  const onLargeScreen = window.matchMedia("(min-width: 40.625em)");
  const form = document.querySelector(".js-form");
  const requiredInputs = document.querySelectorAll(
    ".js-required-input[required]"
  );
  const alerts = document.querySelectorAll(".js-alert");

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

  const useCustomFormValidation = () => {
    form?.setAttribute("novalidate", "");
  };

  const showAlertMessage = ({ input, alert, message }) => {
    alert.textContent = message;
    input.classList.add("is-invalid");
  };

  const handleAlert = (input, message) => {
    alerts.forEach((alert) => {
      const inputID = input.dataset.id;
      const alertID = alert.dataset.id;
      if (inputID === alertID) {
        showAlertMessage({ input, alert, message });
      }
    });
  };

  const validateEmail = (input, email) => {
    const emailValidation =
      /^(?:[a-z0-9.]){2,30}@(?:[a-z0-9-]){2,30}\.(?:[a-z0-9]){2,3}(?:\.(?:[a-z0-9]){2,3})?$/;
    const isValid = emailValidation.test(email);
    if (!isValid) {
      handleAlert(input, "Please use a valid email address");
    }
    return isValid;
  };

  const isInputFilled = (input, value) => {
    const isFilled = !!value;
    if (!isFilled) {
      handleAlert(input, "Can't be empty");
    }
    return isFilled;
  };

  const checkAllRequiredInputs = () => {
    let isNameFilled = false;
    let isEmailValid = false;
    let isMessageFilled = false;
    requiredInputs.forEach((input) => {
      const id = input.dataset.id;
      const value = input.value;
      switch (id) {
        case "name":
          isNameFilled = isInputFilled(input, value);
          break;
        case "email":
          {
            const isEmailFilled = isInputFilled(input, value);
            if (isEmailFilled) {
              isEmailValid = validateEmail(input, value);
            }
          }
          break;
        case "message":
          isMessageFilled = isInputFilled(input, value);
          break;
        default:
          console.error(`This ${id} input field doesn't exist`);
      }
    });
    const areAllInputsValid = isNameFilled && isEmailValid && isMessageFilled;
    return areAllInputsValid;
  };

  const clearAllAlerts = () => {
    alerts.forEach((alert) => (alert.textContent = ""));
    requiredInputs.forEach((input) => input.classList.remove("is-invalid"));
  };

  const validateForm = (event) => {
    clearAllAlerts();
    const isFormInvalid = checkAllRequiredInputs() === false;
    if (isFormInvalid) {
      event.preventDefault();
    }
  };

  menuButton.addEventListener("click", toggleMenu);
  onLargeScreen.addEventListener("change", closeMenu);
  document.addEventListener("DOMContentLoaded", useCustomFormValidation);
  form?.addEventListener("submit", validateForm);
})();
