const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");



const newPostBtn = document.querySelector(".new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");


const closeEditProfile = editProfileModal.querySelector(".modal__close-btn");
const closeNewPost = newPostModal.querySelector(".modal__close-btn");


editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
})

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
})

closeEditProfile.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened")
})

closeNewPost.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened")
})

