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

const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__title")
const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const profileFormElement = editProfileModal.querySelector(".modal__form");
const nameInput = profileFormElement.querySelector("#edit-name");
const jobInput = profileFormElement.querySelector("#edit-description");



const newPostBtn = document.querySelector(".new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const linkInput = addCardFormElement.querySelector("#post-img-link");
const captionInput = addCardFormElement.querySelector("#post-caption");


const closeEditProfile = editProfileModal.querySelector(".modal__close-btn");
const closeNewPost = newPostModal.querySelector(".modal__close-btn");

function openModal (modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal (modal) {
  modal.classList.remove("modal_is-opened");
}


editProfileBtn.addEventListener("click", function () {
  const name = profileNameElement.textContent;
  const job = profileJobElement.textContent;

  nameInput.value = name;
  jobInput.value = job;

  openModal(editProfileModal);
})

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
})

closeEditProfile.addEventListener("click", function () {
  closeModal(editProfileModal);
})

closeNewPost.addEventListener("click", function () {
  closeModal(newPostModal);
})

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  console.log(nameInput.value, jobInput.value)

  const name = nameInput.value;
  const job = jobInput.value;

  profileNameElement.textContent = name;
  profileJobElement.textContent = job;

  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const link = linkInput.value;
  const caption = captionInput.value;


  console.log(link, caption);
  closeModal(newPostModal);
  addCardFormElement.reset();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function(card) {
  console.log(card.name);
});