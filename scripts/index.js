// Initial Card Posts
const initialCards = [{
  name : "Val Thorens",
  link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
},{
  name : "Restaurant terrace",
  link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
},{
  name : "An outdoor cafe",
  link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
},{
  name : "A very long bridge, over the forest and through the trees",
  link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
},{
  name : "Tunnel with morning light",
  link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
},{
  name : "Mountain house",
  link : "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
}];

// Main Profile
const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__title");

//Forms
const profileFormElement = document.forms["editProfileForm"];
const addCardFormElement = document.forms["postImageForm"];


// Edit Profile
const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const nameInput = profileFormElement.querySelector("#edit-name");
const jobInput = profileFormElement.querySelector("#edit-description");

// New Post
const newPostBtn = document.querySelector(".new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const linkInput = addCardFormElement.querySelector("#post-img-link");
const captionInput = addCardFormElement.querySelector("#post-caption");

// Open Post
const openCardModal = document.querySelector("#open-image-modal");
const openCardElement = openCardModal.querySelector(".modal__container-images");
const openCardImage = openCardElement.querySelector(".modal__picture");
const openCardCaption = openCardElement.querySelector(".modal__title");

// close Buttons
const closeEditProfile = editProfileModal.querySelector(".modal__close-btn");
const closeNewPost = newPostModal.querySelector(".modal__close-btn");
const closeCardBtn = openCardElement.querySelector(".modal__close-btn");

// Card Posts Hard
const cardTemplate = document.querySelector("#card-template").content;
const cardsList = document.querySelector(".cards-list");


// Open/Close Functions
function openModal (modal) {
  modal.classList.add("modal_is-opened");
};

function closeModal (modal) {
  modal.classList.remove("modal_is-opened");
};

// --------------- Edit Profile---------------- //
editProfileBtn.addEventListener("click", () => {
  const name = profileNameElement.textContent;
  const job = profileJobElement.textContent;

  nameInput.value = name;
  jobInput.value = job;

  openModal(editProfileModal);
});

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  console.log(nameInput.value, jobInput.value)

  const name = nameInput.value;
  const job = jobInput.value;

  profileNameElement.textContent = name;
  profileJobElement.textContent = job;

  closeModal(editProfileModal);
};

closeEditProfile.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// ---------------- New Post ------------------ //
function getCardElement(data) {
  const cardTemplateCopy = cardTemplate.cloneNode(true);
  const cardTitle = cardTemplateCopy.querySelector(".card__name");
  const cardImage = cardTemplateCopy.querySelector(".card__picture");
  const cardContent = cardTemplateCopy.querySelector(".card__button-picture");
  const cardLike = cardTemplateCopy.querySelector(".card__like");
  const cardDelete = cardTemplateCopy.querySelector(".card__delete");
  const cardToDelete = cardTemplateCopy.querySelector(".card")
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  cardContent.addEventListener("click", () => {
    openCardImage.src = data.link;
    openCardImage.alt = data.name;
    openCardCaption.textContent = data.name;
    openModal(openCardModal);
  });

  closeCardBtn.addEventListener("click", () => {
    closeModal(openCardModal);
  });

  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("card__like--liked");
  });

  cardDelete.addEventListener("click", () => {
    cardToDelete.remove();
  });

  return cardTemplateCopy;
};

initialCards.forEach((card) => {
  const post = getCardElement(card);
  cardsList.append(post);
});

newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const link = linkInput.value;
  const caption = captionInput.value;

  const newCard = {"name" : caption, "link" : link}

  cardsList.prepend(getCardElement(newCard));
  closeModal(newPostModal);
  addCardFormElement.reset();
};

closeNewPost.addEventListener("click", () => {
  closeModal(newPostModal);
});


// -------- Form Submits -------- //
profileFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardSubmit);
