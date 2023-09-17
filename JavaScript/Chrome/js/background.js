const wrap = document.querySelector(".wrap");
const images = ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImage}`;
wrap.prepend(bgImage);