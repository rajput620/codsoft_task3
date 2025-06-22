const display = document.getElementById('display');
const buttons = document.getElementById('buttons');


const buttonValues = [
  'C', '/', '*', '-',
  '7', '8', '9', '+',
  '4', '5', '6', '=',
  '1', '2', '3', '.',
  '0'
];



buttonValues.forEach(value => {
  const button = document.createElement('button');
  button.textContent = value;

  button.addEventListener('click', () => handleInput(value));
  buttons.appendChild(button);
});


function handleInput(value) {
  if (value === 'C') {
    display.value = '';
  } else if (value === '=') {
    if (display.value === '') {
      display.value = 'Enter values';
    } else {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }
  } else {
 
    display.value += value;
  }
}
