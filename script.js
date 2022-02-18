const answerList = document.querySelectorAll('[data-js="answer"]');

answerList.forEach(answer => {
  const button = answer.querySelector('[data-js="answer-button"]');
  const firstAnswer = answer.querySelector('[data-js="first-answer"]');
  button.addEventListener('click', () => {
    firstAnswer.classList.toggle('display-toggle');
  });
});

const switchBookmarkBackroundcolor = document.querySelectorAll(
  '[data-js="bookmarkSymbol"]'
);

switchBookmarkBackroundcolor.forEach(bookmarkSymbolElement => {
  const switchBookmarkBackroundcolor = bookmarkSymbolElement.querySelector(
    '[]data-js="bookmarkSymbol"]'
  );
  switchBookmarkBackroundcolor.addEventListener('click', () => {
    switchBookmarkBackroundcolor.classList.add('highlight');
  });
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
