const answerList = document.querySelectorAll('[data-js="answer"]');

answerList.forEach(answer => {
  const button = answer.querySelector('[data-js="answer-button"]');
  const firstAnswer = answer.querySelector('[data-js="first-answer"]');
  button.addEventListener('click', () => {
    firstAnswer.classList.toggle('display-toggle');
  });
});

const changeColor = document.querySelectorAll('[data-js="bookmarkSymbol"]');

changeColor.forEach(changeColorElement => {
  console.log(changeColor);
  const colorTrigger = changeColorElement.querySelector(
    '[data-js="bookmark1"]'
  );
  console.log(colorTrigger);
  colorTrigger.addEventListener('click', () => {
    colorTrigger.classList.toggle('highlight');
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

const textInput3 = document.querySelector('[data-js="textfieldInput3"]');
const counter3 = document.querySelector('[data-js="counter3"]');

textInput3?.addEventListener('input', () => {
  counter3.textContent = textInput3.value.length;
});

const linkHome = document.querySelector('.link-home');
const linkBookmarked = document.querySelector('.link-bookmarked');
const linkCreate = document.querySelector('.link-create');
const linkProfile = document.querySelector('.link-profile');

const pageHome = document.querySelector('#Home');
const pageBookmarked = document.querySelector('#Bookmarked');
const pageCreate = document.querySelector('#Create');
const pageProfile = document.querySelector('#Profile');

linkHome.addEventListener('click', () => {
  pageHome.classList.add('current');
  pageBookmarked.classList.remove('current');
  pageCreate.classList.remove('current');
  pageProfile.classList.remove('current');
});

linkBookmarked.addEventListener('click', () => {
  pageHome.classList.remove('current');
  pageBookmarked.classList.add('current');
  pageCreate.classList.remove('current');
  pageProfile.classList.remove('current');
});

linkCreate.addEventListener('click', () => {
  pageHome.classList.remove('current');
  pageBookmarked.classList.remove('current');
  pageCreate.classList.add('current');
  pageProfile.classList.remove('current');
});

// linkProfile.addEventListener('click', () => {
//   pageHome.classList.remove('current');
//   pageBookmarked.classList.remove('current');
//   pageCreate.classList.remove('current');
//   pageProfile.classList.add('current');
// });
