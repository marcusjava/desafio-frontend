const reactCheckBox = document.getElementById("react");
const vueCheckBox = document.getElementById("vue");
const angularCheckBox = document.getElementById("angular");
const btnDecrease = document.getElementById("btn-decrease");
const btnIncrease = document.getElementById("btn-increase");
const inputQt = document.getElementById("input-qt");
const inputObservations = document.getElementById("observations");
const btnSubmit = document.getElementById("btn-submit");
const formElm = document.querySelector("form");
const messageElm = document.getElementById("message");

function init() {
  inputQt.value = 0;
  btnDecrease.classList.add("disabled");
}

function clearFields() {
  inputQt.value = 0;
  reactCheckBox.checked = false;
  vueCheckBox.checked = false;
  angularCheckBox.checked = false;
  inputObservations.value = "";
}

btnDecrease.addEventListener("click", (e) => {
  e.preventDefault();
  const { value } = inputQt;
  if (value <= 0) {
    inputQt.classList.add("error");
    return;
  }
  inputQt.value--;
});

btnIncrease.addEventListener("click", (e) => {
  e.preventDefault();
  btnDecrease.classList.remove("disabled");
  inputQt.classList.remove("error");
  inputQt.value++;
});

formElm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    (!reactCheckBox.checked &&
      !vueCheckBox.checked &&
      !angularCheckBox.checked) ||
    inputQt.value === 0
  ) {
    messageElm.innerText = "Preencha todos os campos!";
    messageElm.classList.add("error-message");
    messageElm.classList.remove("hidden");
    return;
  }
  messageElm.innerText = "Formulario enviado com sucesso!";
  messageElm.classList.add("success-message");
  messageElm.classList.remove("hidden");
  clearFields();
});

init();
