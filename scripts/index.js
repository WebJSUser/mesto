const popUpOpen = document.querySelector('.profile__edit-button');
const popUpClose = document.querySelector('.popup__close-btn');
const popUpSave = document.querySelector('.popup__save-btn');
const overlay = document.querySelector('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');

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