let hero = document.querySelector(".hero");
let nextBtn = document.querySelector(".nextimg");
let prevBtn = document.querySelector(".previmg");

let images = [
  "hero1.jpg",
  "hero2.jpg",
  "hero3.jpg",
  "hero4.jpg"
];

let imgIndex = 0;
setInterval(() => {
  imgIndex = (imgIndex + 1) % images.length;
  hero.style.backgroundImage = `url('${images[imgIndex]}')`;
}, 5000);


function updateImage() {
  hero.style.backgroundImage = `url('${images[imgIndex]}')`;
}


function nextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  imgIndex = (imgIndex - 1 + images.length) % images.length;
  updateImage();
}



nextBtn.addEventListener("click", () => {
  nextImage();
});

prevBtn.addEventListener("click", () => {
  prevImage();
});



updateImage();

