const overlay = document.querySelector("#overlay");
const openBtn = document.querySelector("#btn-open");
const closeBtn = document.querySelector("#btn-close");
const nav = document.querySelector("#nav");

openBtn.addEventListener("click", function () {
  openBtn.classList.add("d-none");
  closeBtn.classList.remove("d-none");
  nav.classList.remove("d-none");
  overlay.classList.remove("d-none");
});

closeBtn.addEventListener("click", function () {
  closeBtn.classList.add("d-none");
  openBtn.classList.remove("d-none");
  nav.classList.add("d-none");
  overlay.classList.add("d-none");
});
