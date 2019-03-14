
// Konstruktør.
// Lager ikke eller returnerer, kun initialiserer.
function Nim(player1, player2, victory, total, maxGrab) {
    this.player1 = player1;
    this.player2 = player2;
    this.victory = victory;
    this.total = total;
    this.maxGrab = maxGrab;
}

var game = new Nim("Henrik", "Mahmoud", 1, 15, 3)

// var player1 = new Nim (name: "", human: True); // objekt med navn og om spilleren er menneske.
// var player2 = new Nim (name: "", human: True); // objekt med navn og om spilleren er menneske.

// Når spillet er avsluttet, skal spillobjektet kalle denne.

// div variabler:
var total = game.total;
var maxgrab_p1 = game.maxGrab;
var maxgrab_p2 = game.maxGrab;
var player1 = game.player1;
var player2 = game.player2;
var victory = game.victory;

// innlasting til html:
document.getElementById("player1_html").innerHTML = player1;
document.getElementById("player2_html").innerHTML = player2;

//funksjoner:
function Victory(player) {
  document.getElementById("win").innerHTML = (player + " vinner!") ;
};

//funksjonalitet til knappene:
function remove1() {
  total-=1;
  maxgrab_p1-=1;
  console.log("maxgrab1 ", maxgrab_p1, "to maxgrab 2:", maxgrab_p2)
  if (total === victory) {
    Victory(player1, " ");
  }
  if (maxgrab_p1 === 0) {
    maxgrab_p2 = 3;
  }
  document.getElementById("score").innerHTML = total;
};

function remove2() {
  total-=2;
  maxgrab_p1-=1;
  console.log("maxgrab1 ", maxgrab_p1, "to maxgrab 2:", maxgrab_p2)
  if (total === victory) {
    Victory(player1, " ");
  }
  if (maxgrab_p1 === 0) {
    maxgrab_p2 = 3;
  }
  document.getElementById("score").innerHTML = total;
};

function remove3() {
  total-=3;
  maxgrab_p1-=1;
  console.log("maxgrab1 ", maxgrab_p1, "to maxgrab 2:", maxgrab_p2)
  if (total === victory) {
    Victory(player1, " ");
  }
  if (maxgrab_p1 === 0) {
    maxgrab_p2 = 3;
  }
  document.getElementById("score").innerHTML = total;
};



function remove1_2() {
  total-=1;
  maxgrab_p2-=1;
  console.log(maxgrab_p2, " ", maxgrab_p1)

  if (total === victory) {
    Victory(player2, " ");
  }
  if (maxgrab_p2 === 0) {
    maxgrab_p1 = 3;
  }
  document.getElementById("score").innerHTML = total;
};

function remove2_2() {
  total-=2;
  maxgrab_p2-=1;
  console.log(maxgrab_p2, "", maxgrab_p1)
  if (total === victory) {
    Victory(player2, " ");
  }
  if (maxgrab_p2 === 0) {
    maxgrab_p1 = 3;
  }
  document.getElementById("score").innerHTML = total;
};

function remove3_2() {
  total-=3;
  maxgrab_p2-=1;
  console.log(maxgrab_p2, "", maxgrab_p1)
  if (total === victory) {
    Victory(player2, " ");
  }
  if (maxgrab_p2 === 0) {
    maxgrab_p1 = 3;
  }
  document.getElementById("score").innerHTML = total;
};

document.getElementById("score").innerHTML = total;





//     total: 10;  // total skal være et heltall.//
//     // Hvis maxGrab ikke blir gitt som argument, skal den returnere 3.
//     if (maxGrab == undefined) maxGrab = 3;
//
// };

// function victory() {
//   console.log("hej");
// }
