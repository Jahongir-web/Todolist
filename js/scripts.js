
var elToDoForm = document.querySelector(`.todolist-form`);
var idBox = [];
var elementList = [];

if (elToDoForm) {
  var elInput = elToDoForm.querySelector(`.todo-element-input`);
  var elCheckbox = elToDoForm.querySelector(`.todo-checkbox`);
  var elList = document.querySelector(`.list`);
  var elementList = [];
  var elAlert = document.querySelector(`.alert-text`);
};

var counter = 0;

elToDoForm.addEventListener(`submit`, function(evt){

  counter++
  evt.preventDefault();

  if (elementList.includes(elInput.value)) {

    elAlert.textContent = `Bu element ro'yhatda bor!`;

    return;

  } else {
    elAlert.textContent = ``;
  }

  if (elCheckbox.checked === true) {

    elementList.unshift({
      title: elInput.value,
      id: counter,
      isChizilgan: false
    });
    idBox.unshift(counter);
  } else {

    elementList.push({
      title: elInput.value,
      id: counter,
      isChizilgan: false
    });
    idBox.push(counter);
  }

  elList.innerHTML = ``;

  for (var element of elementList) {
    var elItem = document.createElement(`li`);
    elItem.classList.add(`list-item`);
    var elItemCheckbox = document.createElement(`input`);
    elItemCheckbox.type = `checkbox`;
    elItemCheckbox.classList.add(`item-checkbox`);
    var elItemSpan = document.createElement(`span`);
    elItemSpan.classList.add(`item-text`);
    var elItemCloseInput = document.createElement(`button`);
    elItemCloseInput.classList.add(`close-btn`);
    elItemCloseInput.textContent = `x`;
    elItemCloseInput.classList.add(`item-btn`);

    elItemCheckbox.dataset.id = element.id;
    elItemSpan.textContent = element.title;
    elItemCheckbox.checked = element.isChizilgan;

    elItem.appendChild(elItemCheckbox);
    elItem.appendChild(elItemSpan);
    elItem.appendChild(elItemCloseInput);
    elList.appendChild(elItem);


    elItemCheckbox.addEventListener(`change`, function () {
      var changed = Number(this.dataset.id);
      var changedIndex = idBox.indexOf(changed);
      var changedItem = elementList[changedIndex];
      changedItem.isChizilgan = !changedItem.isChizilgan;
      elementList.splice(changedIndex, 1, changedItem);
      // console.log(changedItem);
      // console.log(this.dataset.id);
    });


  }



  elInput.value = ``;
  elCheckbox.checked = false;
  elInput.focus();

});
