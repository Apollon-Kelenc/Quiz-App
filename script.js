const showAnswer = document.querySelector('[data-js="answer-button"]');
const firstAnswer = document.querySelector('[data-js="first-answer"]');

showAnswer.addEventListener("click", () => {
  firstAnswer.classList.toggle("display-toggle");
});
