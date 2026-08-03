const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_active"
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.classList.add(settings.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
}

const hasInvalidInput = inputList => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disabledItem(buttonElement);
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const disabledItem = (buttonElement) => {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
}

const resetValidation = (formElement, inputList, buttonElement) => {
  inputList.forEach(inputElement => {
    hideInputError(formElement, inputElement);
  });
  if (buttonElement) {
    toggleButtonState(inputList, buttonElement);
  }
}

const setEventListeners = formElement => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach(inputElement => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener("submit", evt => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
      const buttonElement = formElement.querySelector(settings.submitButtonSelector);
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.disabled = true;
  });
};

enableValidation(settings);