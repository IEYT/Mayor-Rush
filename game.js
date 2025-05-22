const canvas = document.getElementById("canvas");
const playbutton = document.getElementById("buttonPlay");
const ctx = canvas.getContext("2d");
const corrupt = document.getElementById("Corruption");
let corruption = 0;

ctx.fillStyle = "#B2FFBD";
ctx.fillRect(10, 10, 758, 350);

playbutton.addEventListener("mousedown", function (event) {
  this.remove();
  ctx.beginPath();
  ctx.arc(200, 200, 100, 0, Math.PI * 2);
  ctx.fillStyle = "peachpuff";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(170, 170, 15, 0, Math.PI * 2);
  ctx.arc(230, 170, 15, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(200, 220, 40, 0, Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(120, 120); // Left side of hairline
  ctx.bezierCurveTo(140, 60, 250, 60, 280, 120); // Wavy hair curve
  ctx.lineTo(120, 120); // Close the shape
  ctx.fillStyle = "brown";
  ctx.fill();

  // **Extra Hair Strands for Layering**
  ctx.beginPath();
  ctx.moveTo(140, 100);
  ctx.lineTo(160, 80); // Left small spike
  ctx.lineTo(170, 100);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(230, 100);
  ctx.lineTo(250, 80); // Right small spike
  ctx.lineTo(260, 100);
  ctx.fill();

  ctx.font = "12.5px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(
    "Hey There! I am the mayor(with semi-circle hair), and you press the buttons to manage some basic aspects of the town.",
    50,
    70
  );
});

function checkcorrupt() {
  if (corruption > 3) {
    document.getElementById("scene").innerText =
      "You... Are Very Corrupt, and shall be expelled.";
    imgGameover = document.createElement("img");
    imgGameover.src = "Gameover.svg";
    document.body.appendChild(imgGameover);
  }
}

corrupt.addEventListener("mousedown", function (event) {
  corruption += 1;
  console.log(corruption);
  checkcorrupt();
});

console.log("Viewport width:", window.innerWidth);
console.log("Viewport height:", window.innerHeight);
