const images = ["0.png","1.jpg","2.png","3.jpg","4.png"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = `url('img/${chosenImage}')`;

document.body.style.backgroundImage = bgImage;