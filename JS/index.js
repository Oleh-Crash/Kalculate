
//calck
const display = document.querySelector('.display');

//digits
const digitButtons = document.querySelectorAll('.digits button');
digitButtons.forEach( button => button.addEventListener('click', digitClicked));
function digitClicked(ev){
   display.value += ev.target.innerText;
}

//opers
const operButtons = document.querySelectorAll('.opers button');
operButtons.forEach( button => button.addEventListener('click', operClicked));
function operClicked(ev){
   display.value += ev.target.innerText;
}



//equals
const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    display.value = eval(display.value);
});

//reset form
function logReset(event) {
  log.textContent = "Form reset!";
}
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('reset', logReset);
