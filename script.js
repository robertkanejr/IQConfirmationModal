const confirmBtn = document.querySelector(".confirm-btn");
const closeBtn = document.querySelector(".close-btn");
const agreeBtn = document.querySelector(".agree-btn");
const modal = document.querySelector(".modal-container");

const toggleModal = () => {
	modal.classList.toggle("hidden");
};

confirmBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
agreeBtn.addEventListener("click", toggleModal);
