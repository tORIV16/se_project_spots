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