//ВОСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

const errorLoadDataTemplate = document.querySelector('#data-error').content;
const REMOVE_MESSAGE_TIMEOUT = 5000;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomIntegerWithoutRepeat = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getEffectsSelector = (currentInputId) => {
  const selectors = {
    'effect-none': 'effects__preview--none',
    'effect-chrome': 'effects__preview--chrome',
    'effect-sepia': 'effects__preview--sepia',
    'effect-marvin': 'effects__preview--marvin',
    'effect-heat': 'effects__preview--heat',
    'effect-phobos': 'effects__preview--phobos',
  };
  return selectors[currentInputId];
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const showErrorMessage = (message) => {
  const errorNode = errorLoadDataTemplate.cloneNode(true);

  if (message) {
    errorNode.querySelector('.data-error__title').textContent = message;
  }

  document.body.append(errorNode);

  const errorLoadDataNode = document.body.querySelector('.data-error');

  setTimeout(() => {
    errorLoadDataNode.remove();
  }, REMOVE_MESSAGE_TIMEOUT);

};

export {getRandomInteger, getRandomIntegerWithoutRepeat, getRandomArrayElement, isEscapeKey, getEffectsSelector, showErrorMessage};
