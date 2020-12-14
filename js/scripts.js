
var elToDoForm = document.querySelector(`.todolist-form`);


if (elToDoForm) {
  var elInput = elToDoForm.querySelector(`.todo-element-input`);
  var elCheckbox = elToDoForm.querySelector(`.todo-checkbox`);
  var elList = document.querySelector(`.list`);
  var elementList = [];
  var elAlert = document.querySelector(`.alert-text`);
};


elToDoForm.addEventListener(`submit`, function(evt){

  evt.preventDefault();

  elList.classList.add(`box`);

  if (elementList.includes(elInput.value)) {

    elAlert.textContent = `Bu element ro'yhatda bor!`;

    // elInput.value = ``;
    return;
  } else {
    elAlert.textContent = ``;
  }

  if (elCheckbox.checked === true) {

    elementList.unshift(elInput.value);
  } else {

    elementList.push(elInput.value);
  }

  elList.innerHTML = elementList.join(`</li><li>`);

  elInput.value = ``;

});
