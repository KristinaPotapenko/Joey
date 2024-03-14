const modal = document.querySelector(".js-modal");
const modalBtnOpen = document.querySelector(".js-modal-button-open");
const modalBtnClose = document.querySelector(".js-modal-button-close");
const modalBtnSubmit = document.querySelector(".js-modal-button-submit");

const toggleModal = () => {
  modal.classList.toggle("is-open");
};

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
modalBtnSubmit.addEventListener("click", toggleModal);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".js-modal-form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    const modalError = document.querySelector(".js-modal-error");

    let formData = new FormData(form);

    if (error === 0) {
      modalError.innerHTML = "";
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
        alert("Error!");
      }
    } else {
      modalError.innerHTML = "Enter name or email";
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll(".modal__input--req");

    formReq.forEach((input) => {
      formRemoveError(input);

      if (input.classList.contains("js-email")) {
        if (emailCheck(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
      return error;
    });

    function formAddError(input) {
      input.classList.add("modal__input__error");
    }

    function formRemoveError(input) {
      input.classList.remove("modal__input__error");
    }

    function emailCheck(input) {
      var re =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return re.test(input.value);
    }
  }
});
