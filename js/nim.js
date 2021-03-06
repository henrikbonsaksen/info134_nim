
// Konstruktør.
// Lager ikke eller returnerer, kun initialiserer.
function Nim(player1, player2, victory, total, maxGrab) {
    this.player1 = player1;
    this.player2 = player2;
    this.victory = victory;
    this.total = total;
    this.maxGrab = maxGrab;
}

// om feil verdier blir puttet i max grab
if(max == "") {
  alert("Maxgrab er tom");
  throw "Maxgrab er tom";
}
if(isNaN(max)) {
  alert("Maxgrab er ikke et tall");
  throw "Maxgrab er ikke et tall";
}
if(max > 3) {
  alert("Maxgrab er for høy");
  throw "Maxgrab er for høy";
}
if(max < 1) {
  alert("Maxgrab er for lav");
  throw "Maxgrab er for lav";
}

// starter spillet
var game = new Nim(name_p1, name_p2, 1, total1, max)

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
    if (total > 0) {
      if (maxgrab_p1 > 0) {
        total-=1;
        maxgrab_p1 = 0;
        // console.log(maxgrab_p1) //for tracking av maxgrab
        if (total === victory) {
          Victory(player1, " ");
        }
        if (total < 1) { // om totalen er mindre enn 1, vil den andre spilleren vinne.
          Victory(player2, " ")
        }
        if (maxgrab_p1 === 0) {
          maxgrab_p2 = 3;
        }
        document.getElementById("score").innerHTML = total;
      }
    };
}

  function remove2() {
    if (total > 0) {
      if (maxgrab_p1 > 0) {
        total-=2;
        maxgrab_p1 = 0;
        // console.log(maxgrab_p1)
        if (total === victory) {
          Victory(player1, " ");
        }
        if (total < 1) {
          Victory(player2, " ")
        }
        if (maxgrab_p1 === 0) {
          maxgrab_p2 = 3;
        }
        document.getElementById("score").innerHTML = total;
    }
  }
};

  function remove3() {
    if (total > 0) {
      if (maxgrab_p1 > 0) {
        total-=3;
        maxgrab_p1 = 0;
        // console.log(maxgrab_p1)
        if (total === victory) {
          Victory(player1, " ");
        }
        if (total < 1) {
          Victory(player2, " ")
        }
        if (maxgrab_p1 === 0) {
          maxgrab_p2 = 3;
        }
        document.getElementById("score").innerHTML = total;
    }
  }
};



  function remove1_2() {
    if (total > 0) {
      if (maxgrab_p2 > 0) {
        total-=1;
        maxgrab_p2 = 0;
        // console.log(maxgrab_p2)
        if (total === victory) {
          Victory(player2, " ");
        }
        if (maxgrab_p2 === 0) {
          maxgrab_p1 = 3;
        }
        if (total < 1) {
          Victory(player1, " ")
        }
        document.getElementById("score").innerHTML = total;
    }
  }
};

  function remove2_2() {
    if (total > 0) {
      if (maxgrab_p2 > 0) {
        total-=2;
        maxgrab_p2 = 0;
        // console.log(maxgrab_p2)
        if (total === victory) {
          Victory(player2, " ");
        }
        if (maxgrab_p2 === 0) {
          maxgrab_p1 = 3;
        }
        if (total < 1) {
          Victory(player1, " ")
        }
        document.getElementById("score").innerHTML = total;
      }
    }
};

  function remove3_2() {
    if (total > 0) {
      if (maxgrab_p2 > 0) {
        total-=3;
        maxgrab_p2 = 0;
        // console.log(maxgrab_p2)
        if (total === victory) {
          Victory(player2, " ");
        }
        if (total < 1) {
          Victory(player1, " ")
        }
        if (maxgrab_p2 === 0) {
          maxgrab_p1 = 3;
        }
        // if (total > 0) {
        document.getElementById("score").innerHTML = total;
        // }
      }
    }
};

document.getElementById("score").innerHTML = total;
