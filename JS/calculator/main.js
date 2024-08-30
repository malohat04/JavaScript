// 1-get Elements
// 2 -add listeer to the btn
// 3 -  get input's value
// 4-calculate values
// 5-give values to the h1

// funksiya

const firstInput = document.querySelector(".first-input"),
  secondInput = document.querySelector(".second-input"),
  equalsBtn = document.querySelector(".equals"),
  calculatedValue = document.querySelector(".calculated-value");


equalsBtn.addEventListener("click", () => {
  const firstValue = firstInput.value,
    secondValue = secondInput.value;

  const calculated = +firstValue + +secondValue
  calculatedValue.textContent = calculated
});

//
