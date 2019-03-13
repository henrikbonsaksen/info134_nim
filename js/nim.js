
// This is a constructor function that initializes new Nim objects.
// // It does not create or return them, just initializes them.
function Nim(player1, player2, victory, total, maxGrab) {
    this.player1 = player1;
    this.player2 = player2;
    this.victory = victory;
    this.total = total;
    this.maxGrab = maxGrab;
}


// All Nim objects inherit from this object.

var player1 = new Nim (name: "", human: True); // objekt med navn og om spilleren er menneske.
var player2 = new Nim (name: "", human: True); // objekt med navn og om spilleren er menneske.

function victory() { // Når spillet er avsluttet, skal spillobjektet kalle denne.
        if (Nim == finish)
        return finish + "vinner";
};





//     total: 10;  // total skal være et heltall.//
//     // Hvis maxGrab ikke blir gitt som argument, skal den returnere 3.
//     if (maxGrab == undefined) maxGrab = 3;
//
// };

// function victory() {
//   console.log("hej");
// }
