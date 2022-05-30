let inputs = document.querySelectorAll(".inputs");
let infoDiv = document.querySelector(".info");

const checkInputs = () => {
  inputs.forEach((input) => {
    let requiredLength = input.getAttribute("data-length");
    let inputParent = input.closest("fieldset").getAttribute("id");

    let inputError = document.querySelector("#" + inputParent + " span");

    if (requiredLength > input.value.length) {
      inputError.innerHTML = `<p>This field requires a minimum input of ${requiredLength} characters</p>`;
      inputError.classList.contains("success")
        ? inputError.classList.remove("success")
        : "";
      inputError.classList.add("error");
    } else {
      inputError.innerHTML = "<p>This field is correct</p>";
      inputError.classList.contains("error")
        ? inputError.classList.remove("error")
        : "";
      inputError.classList.add("success");
    }
  });
};

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    checkInputs();
    setTimeout(() => {
      infoDiv.classList.remove("error");
    }, 3000);
    e.preventDefault();
  });
