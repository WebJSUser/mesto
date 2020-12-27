let popUpOpen = document.querySelector('.profile__edit-button');
let popUpClose = document.querySelector('.popup__close-btn');
let popUp = document.querySelector('.popup');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput =  document.form.inputTitle;
let jobInput = document.form.inputSubtitle;

function popUpOpenButton(){
    popUp.classList.add('popup_open');
    popUp.classList.add('popup_overlay');
}

function popUpCloseButton(){
    popUp.classList.remove('popup_open');
    popUp.classList.remove('popup_overlay');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = `${nameInput.value}`;
    profileSubTitle.textContent = `${jobInput.value}`;
    popUpCloseButton();
}

formElement.addEventListener('submit', handleFormSubmit);
popUpClose.addEventListener('click', popUpCloseButton);
popUpOpen.addEventListener('click', popUpOpenButton);