const containerFluid = document.querySelector(".container-fluid");
const popupContainer = document.querySelector(".popup-container");
const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");

btn.addEventListener("click", () => {
  containerFluid.classList.add("active");
  popupContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  popupContainer.classList.add("active");
  containerFluid.classList.remove("active");
});
