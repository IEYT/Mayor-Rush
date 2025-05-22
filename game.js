const canvas = document.getElementById("canvas");
const playbutton = document.getElementById("buttonPlay");
const ctx = canvas.getContext("2d");
const corrupt = document.getElementById("Corruption");
const fund = document.getElementById("Funding");
const spend = document.getElementById("Spending");
const decorrupt = document.getElementById("Decorrupt");

let corruption = 0;
let funding = 0;
let spending = 0;
let decorrupting = 0;

ctx.fillStyle = "#B2FFBD";
ctx.fillRect(10, 10, 758, 350);

playbutton.addEventListener("mousedown", function (event) {
  this.remove();
  let img = new Image();
  img.src = "OIP.png";
  img.onload = function () {
    ctx.drawImage(img, 100, 100, 100, 100);
  };
  ctx.font = "12.5px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(
    "Hey There! I am the mayor(with semi-circle hair), and you press the buttons to manage some basic aspects of the town. 6 endings?",
    50,
    70
  );
  function checkcorrupt() {
    if (corruption > 74) {
      document.getElementById("scene").innerText =
        "You... Are Very Corrupt, and shall be expelled.";
      imgGameover = document.createElement("img");
      imgGameover.src = "Gameover.svg";
      document.body.appendChild(imgGameover);
    }
  }

  function checkfund() {
    if (funding > 74) {
      document.getElementById("scene").innerText =
        "You helped 1000s of people, and created an awesome time for a lot of people. But you did too much. You made the town debt-town.";
      imgGameover = document.createElement("img");
      imgGameover.src = "Gameover.svg";
      document.body.appendChild(imgGameover);
    }
  }

  function checkspend() {
    if (spending > 74) {
      document.getElementById("scene").innerText =
        "You spent way too much. You seem like a corrupt person although you didn't corrupt.";
      imgGameover = document.createElement("img");
      imgGameover.src = "Overdone.svg";
      document.body.appendChild(imgGameover);
    }
  }

  function checkdecorrupt() {
    if (decorrupting > 3) {
      document.getElementById("scene").innerText =
        "You sucessfully destroyed all of those fraudsters and corrupt guys. You have made the town a better place.";
      overdone = document.createElement("img");
      overdone.src = "overdone.svg";
      document.body.appendChild(overdone);
    }
  }

  function checkfundSpending() {
    if (spending && funding == 50) {
      document.getElementById("scene").innerText =
        "You, the majesty, has done a pretty stable job. With a mix of spending and funding, you made good progress.";
      stable = document.createElement("img");
      stable.src = "stable.svg";
      document.body.appendChild(stable);
    }
  }

  function checkcorruptDecorrupt() {
    if (corruption && decorrupting == 50) {
      document.getElementById("scene").innerText =
        "You did some shady stuff, but at least to manage it in time.";
      stable = document.createElement("img");
      stable.src = "stable.svg";
      document.body.appendChild(stable);
    }
  }

  function checkeverything() {
    if (corruption && decorrupting && funding && spending == 25) {
      document.getElementById("scene").innerText =
        "Now you're just doing an even mix for fun.";
      stable = document.createElement("img");
      stable.src = "mix.svg";
      document.body.appendChild(stable);
    }
  }

  corrupt.addEventListener("mousedown", function (event) {
    corruption += 1;
    console.log(corruption);
    checkcorrupt();
    checkcorruptDecorrupt();
    checkeverything();
  });

  fund.addEventListener("mousedown", function (event) {
    funding += 1;
    console.log("Funding: " + funding);
    checkfund();
    checkfundSpending();
    checkeverything();
  });

  spend.addEventListener("mousedown", function (event) {
    spending += 1;
    console.log("Spending: " + spending);
    checkspend();
    checkfundSpending();
    checkeverything();
  });

  decorrupt.addEventListener("mousedown", function (event) {
    decorrupting += 1;
    console.log("Decorrupting: " + decorrupting);
    checkdecorrupt();
    checkcorruptDecorrupt();
    checkeverything();
  });

  console.log("Viewport width:", window.innerWidth);
  console.log("Viewport height:", window.innerHeight);
});
