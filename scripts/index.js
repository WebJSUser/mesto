let popUpOpen = document.querySelector('.profile__edit-button');
let popUpClose = document.querySelector('.popup__close-btn');
let popUpSave = document.querySelector('.popup__save-btn');
let overlay = document.querySelector('.popup');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');

popUpOpen.addEventListener('click', function (){
    overlay.classList.add('overlay');
})

popUpClose.addEventListener('click', function (){
    overlay.classList.remove('overlay');
})

popUpSave.addEventListener('click', function (){
    overlay.classList.remove('overlay');
})



let formElement = document.querySelector('.form');

function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameInput =  document.querySelector('.popup__input-title');
    let jobInput = document.querySelector('.popup__input-subtitle');
    profileTitle.textContent = `${nameInput.value}`;
    profileSubTitle.textContent = `${jobInput.value}`;
    nameInput.value = `${nameInput.value}`;
    jobInput.value = `${jobInput.value}`;
}

formElement.addEventListener('submit', handleFormSubmit);