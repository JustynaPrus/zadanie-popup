const form = document.querySelector("form");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const checkbox = document.getElementById("checkbox");
const popup = document.getElementById("popup");
const mainSide = document.getElementById("main_side");
const yourName = document.getElementById("yourName");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameInputValue = nameInput.value;
  let emailInputValue = emailInput.value;

  if (emailInputValue == "" || nameInputValue == "") {
    alert("Halo! Email i imię nie mogą byc puste!");
  } else if (checkbox.checked == false) {
    alert("Uwaga! Warunki muszą być zaakceptowane!");
  } else if (emailInputValue != "" && nameInputValue != "") {
    mainSide.classList.toggle("inactive");
    popup.classList.toggle("inactive");
    yourName.innerHTML = `${nameInputValue}`;
  }
});
