
// This is a constructor function that initializes new Nim objects.
// // It does not create or return them, just initializes them.
function Nim(player1, player2, victory, total, maxGrab) {
    this.player1 = player1;
    this.player2 = player2;
    this.victory = victory;
    this.total = total;
    this.maxGrab = maxGrab;
}

var game = new Nim("p1", "p2", 1, 5, 3)

// All Nim objects inherit from this object.

// var player1 = new Nim (name: "", human: True); // objekt med navn og om spilleren er menneske.
// var player2 = new Nim (name: "", human: True); // objekt med navn og om spilleren er menneske.

// Når spillet er avsluttet, skal spillobjektet kalle denne.


var total = game.total;
var maxgrab = game.maxGrab;
var player1 = game.player1;
var player2 = game.player2;
var victory = game.victory;

function Victory(player) {
  console.log(player + "vinner");
};


function remove1() {
  total-=1;
  maxgrab-=1;
  console.log("fra", game.total,"til ",total)
  console.log(maxgrab)
  if (total === victory) {
    Victory("player1 ");
  }
};

function remove2() {
  total-=2;
  maxgrab-=1;
  console.log("fra", game.total,"til ",total)
  console.log(maxgrab)
  if (total === victory) {
    Victory("player1 ");
  }
};

function remove3() {
  total-=3;
  maxgrab-=1;
  console.log("fra", game.total,"til ",total)
  console.log(maxgrab)
  if (total === victory) {
    Victory("player1 ");
  }
};



// document.getElementById("score").innerHTML = total;


//     total: 10;  // total skal være et heltall.//
//     // Hvis maxGrab ikke blir gitt som argument, skal den returnere 3.
//     if (maxGrab == undefined) maxGrab = 3;
//
// };

// function victory() {
//   console.log("hej");
// }
