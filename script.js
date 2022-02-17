const showAnswer = document.querySelector('[data-js="answer-button"]');
const firstAnswer = document.querySelector('[data-js="first-answer"]');

showAnswer?.addEventListener('click', () => {
  firstAnswer.classList.toggle('display-toggle');
});

const textInput = document.querySelector('[data-js="textfieldInput"]');
const counter = document.querySelector('[data-js="counter"]');

textInput?.addEventListener('input', () => {
  counter.textContent = textInput.value.length;
});

const textInput2 = document.querySelector('[data-js="textfieldInput2"]');
const counter2 = document.querySelector('[data-js="counter2"]');

textInput2?.addEventListener('input', () => {
  counter2.textContent = textInput2.value.length;
});
