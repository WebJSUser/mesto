let popUpOpen = document.querySelector('.profile__edit-button');
let popUpClose = document.querySelector('.popup__close-btn');
let popUp = document.querySelector('.popup');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput =  formElement.inputTitle;
let jobInput = formElement.inputSubtitle;

function popUpOpenButton(){
    popUp.classList.add('popup_open');
    nameInput.value = `${profileTitle.textContent}`;
    jobInput.value = `${profileSubTitle.textContent}`;
}

function popUpCloseButton(){
    popUp.classList.remove('popup_open');

}

function handleFormSubmit (evt) {
    evt.preventDefault();
    popUpCloseButton();
    profileTitle.textContent = `${nameInput.value}`;
    profileSubTitle.textContent = `${jobInput.value}`;
}

formElement.addEventListener('submit', handleFormSubmit);
popUpClose.addEventListener('click', popUpCloseButton);
popUpOpen.addEventListener('click', popUpOpenButton);