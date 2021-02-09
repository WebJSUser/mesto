const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// ------------------EditProfile------------------
const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__title');
const profileSubTitle = profile.querySelector('.profile__subtitle');

const popUpEditProfile = document.querySelector('.popup-edit-profile');
const popUpOpenEdit = profile.querySelector('.profile__edit-button');
const popUpCloseEdit = popUpEditProfile.querySelector('.popup__close-btn');
const formElementEdit = popUpEditProfile.querySelector('.popup__form');
const nameInput = formElementEdit.inputTitle;
const jobInput = formElementEdit.inputSubtitle;

// ------------------AddElement------------------
const templateElement = document.querySelector('.element-template').content;
const popUpAddElement = document.querySelector('.popup-add-element');
const popUpOpenAdd = profile.querySelector('.profile__add-button');
const popUpCloseAdd = popUpAddElement.querySelector('.popup__close-btn');
const formElementAdd = popUpAddElement.querySelector('.popup__form');
const nameInputAdd = formElementAdd.inputTitleAdd;
const jobInputAdd = formElementAdd.inputSubtitleAdd;

// ********************* render ********************************

const elements = document.querySelector('.elements');

// ------------------Image------------------

const popUpImageElement = document.querySelector('.popup-image');
const popUpImage = popUpImageElement.querySelector('.popup__figure-image');
const popUpImageCap = popUpImageElement.querySelector('.popup__caption');
const popUpImageClose = popUpImageElement.querySelector('.popup__close-btn');

const popUpImageOpen = (name, link) => {
    popUpImage.src = link;
    popUpImage.alt = `Изображение ${name}`; 
    popUpImageCap.textContent = name;    
    openPopup(popUpImageElement)
  }    

// *********************Close/Open********************************

function openPopup(arg) {
    arg.classList.add('popup_open');
}

function closePopup(arg) {
    arg.classList.remove('popup_open');
}


// ------------------AddElement------------------

function addElement(name, link) {        
    const elementItem = templateElement.querySelector('.element').cloneNode(true);
    const titleElement = elementItem.querySelector('.element__title');
    const imageElement = elementItem.querySelector('.element__img');

    titleElement.textContent = name;
    imageElement.src = link;
    imageElement.alt = `Изображение ${name}`;

    const btnTrash = elementItem.querySelector('.element__trash-btn');
    btnTrash.addEventListener('click', (evt) => {
        evt.target.closest('article.element').remove();
    })

    const btnLike = elementItem.querySelector('.element__like-btn');
    btnLike.addEventListener('click', () => {
        btnLike.classList.toggle('element__like-btn_act')
    })

    imageElement.addEventListener('click', () => popUpImageOpen(name, link))
    
    popUpImageClose.addEventListener('click', () => closePopup(popUpImageElement))

    return elementItem;
}

// ------------------EditProfile------------------

formElementEdit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubTitle.textContent = jobInput.value;
    closePopup(popUpEditProfile)
});

popUpOpenEdit.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubTitle.textContent;
    openPopup(popUpEditProfile)
});

popUpCloseEdit.addEventListener('click', () => {
    closePopup(popUpEditProfile)
});

// ------------------AddElement------------------

formElementAdd.addEventListener('submit', (evt) => {
    evt.preventDefault();
    elements.prepend(addElement(
        nameInputAdd.value,
        jobInputAdd.value
    ))
    closePopup(popUpAddElement)

});

popUpOpenAdd.addEventListener('click', () => {
    nameInputAdd.value = nameInput.textContent;
    jobInputAdd.value = jobInput.textContent;
    openPopup(popUpAddElement)
});

popUpCloseAdd.addEventListener('click', () => {
    closePopup(popUpAddElement)
});

// ********************* render ********************************

function render(){      
    initialCards.forEach((arg) => {
        elements.append(addElement(arg.name, arg.link));
    });   
}

render();