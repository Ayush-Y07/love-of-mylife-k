const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("mainPage");
const openLetter = document.getElementById("openLetter");
const sorryBtn = document.getElementById("sorryBtn");
const response = document.getElementById("response");
const petals = document.getElementById("petals");

openLetter.addEventListener("click", () => {
  welcome.classList.add("hidden");
  mainPage.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  for (let i = 0; i < 12; i++) setTimeout(createPetal, i * 140);
});

function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = ["🌸", "♡", "✿", "💗"][Math.floor(Math.random() * 4)];
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (12 + Math.random() * 15) + "px";
  petal.style.animationDuration = (6 + Math.random() * 6) + "s";
  petals.appendChild(petal);
  setTimeout(() => petal.remove(), 13000);
}
setInterval(createPetal, 850);

sorryBtn.addEventListener("click", () => {
  response.textContent = "I'm truly sorry, K. ❤️ I hope these words show how much I mean them. Take all the time you need.";
  for (let i = 0; i < 18; i++) setTimeout(createPetal, i * 100);
  sorryBtn.textContent = "A heartfelt sorry, K ❤️";
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".photo").forEach(photo => {
  photo.addEventListener("click", () => {
    lightboxImage.src = photo.dataset.full;
    lightbox.classList.remove("hidden");
  });
});

function closeViewer() {
  lightbox.classList.add("hidden");
  lightboxImage.src = "";
}
closeLightbox.addEventListener("click", closeViewer);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeViewer();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeViewer();
});