const $randomBtn = document.getElementById("randomButton");
const $randomLink = document.getElementById("randomLink");
const $explodingPoo = document.getElementById("explodingPoo");
const explosionSound = new Audio("./img/explosionsSound.mp3");

$randomBtn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 101);
  console.log(randomNumber);
  if (randomNumber < 20) {
    $randomLink.href =
      "https://stackoverflow.com/questions/4689344/how-can-i-add-href-attribute-to-a-link-dynamically-using-javascript";
  } else {
    // nie pamiętam XD
  }
});

function createExplosion() {
  const explosion = document.createElement("img");
  explosion.src = "./img/explosion1.jpg";
  explosion.style.width = "400px";
  explosion.style.height = "400px";
  explosion.style.borderRadius = "50%";
  explosion.style.position = "fixed";
  explosion.style.top = "35%";
  explosion.style.left = "39%";
  explosion.style.transform = "translate(-50%, -50%)";
  explosion.style.animation = "explode 0.8s ease-out";
  explosion.style.opacity = "0.8";
  document.body.appendChild(explosion);

  explosionSound.currentTime = 0;
  explosionSound.play();

  explosion.addEventListener("animationend", () => {
    explosion.remove();
  });
}

explodingPoo.addEventListener("click", () => {
  createExplosion();
});
