const images = [
  "bg-1.jpg",
  "bg-2.jpg",
  "bg-3.jpg",
]

const bgImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${bgImage}`;

document.body.appendChild(image);