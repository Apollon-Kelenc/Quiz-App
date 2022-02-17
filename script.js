const showAnswer = document.querySelector('[data-js="answer-button"]');
const firstAnswer = document.querySelector('[data-js="first-answer"]');

const showAnswer2 = document.querySelector('[data-js="answer-button2"]');
const secondAnswer = document.querySelector('[data-js="second-answer"]');

const showAnswer3 = document.querySelector('[data-js="answer-button3"]');
const thirdAnswer = document.querySelector('[data-js="third-answer"]');

const showAnswer4 = document.querySelector('[data-js="answer-button4"]');
const fourthAnswer = document.querySelector('[data-js="fourth-answer"]');

showAnswer?.addEventListener('click', () => {
  firstAnswer.classList.toggle('display-toggle');
});

showAnswer2?.addEventListener('click', () => {
  secondAnswer.classList.toggle('display-toggle');
});

showAnswer3?.addEventListener('click', () => {
  thirdAnswer.classList.toggle('display-toggle');
});

showAnswer4?.addEventListener('click', () => {
  fourthAnswer.classList.toggle('display-toggle');
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
