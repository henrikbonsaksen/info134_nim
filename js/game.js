Kladd:

// for this js nim game, right click on your webpage, click on inspect or ctrl+shift+i to view console
//simple nim game where there are 3 piles (A,B,C) and 5 stones (ooooo) in each pile , whoever takes the last stone wins.
// User vs computer
//declare var
var pileA = {
   stones: "ooooo",
   print: function() {
     console.log("Pile A: " + this.stones); //prints A:ooooo in console
   }
 };

 var pileB = {
   stones: "ooooo",
   print: function() {
     console.log("Pile B: " + this.stones);
   }
 };

 var pileC = {
   stones: "ooooo",
   print: function() {
     console.log("Pile C: " + this.stones);
   }
 };
//displays stones in each pile
 function displayPiles(){
     console.log("Game of Nim");
     pileA.print();
     pileB.print();
     pileC.print();
 }
//user move
 function userMove(){
  displayPiles();
//prompt user to enter in a required format
     var nimgame = prompt("Please enter pile(A, B or C) and stones (o's) upto 5 you wish to remove.\n" +
                             "Ex. A1 or C4");


     if (nimgame[0] == 'A') {
         var x = pileA.stones.length - nimgame[1];
         pileA.stones = pileA.stones.slice(0,x);
         return pileA.stones;
     } else if (nimgame[0] == 'B') {
         var y = pileB.stones.length - nimgame[1];
         pileB.stones = pileB.stones.slice(0,y);
         return pileB.stones;
     } else if (nimgame[0] == 'C') {
         var z = pileC.stones.length - nimgame[1];
         pileC.stones = pileC.stones.slice(0,z);
         return pileC.stones;
       }

 }

 function computersMove() {

     displayPiles();

     alert("Good Move!Computer's turn!");

     if (pileA.stones != "") {
         pileA.stones = pileA.stones.slice(0,0);
         return pileA.stones;
     } else if (pileB.stones != "") {
         pileB.stones = pileB.stones.slice(0,0);
         return pileB.stones;
     } else if (pileC.stones != "") {
         pileC.stones = pileC.stones.slice(0,0);
         return pileC.stones;
     }

     if (pileA.stones == "" &&
     pileB.stones == "" &&
     pileC.stones == "") {

         alert("Try Again! Computer Wins!Game Over!");
         }
 }

 while (pileA.stones != "" ||
     pileB.stones != "" ||
     pileC.stones != "") {

         userMove();
         if (pileA.stones == "" &&
             pileB.stones == "" &&
             pileC.stones == "") {
                alert("Good Job! You win! Game Over!");
                 }

        if (pileA.stones != "" ||
            pileB.stones != "" ||
            pileC.stones != "") {
                 computersMove();
                 }
     }

 alert('Game Over! Refresh to play Again');
console.log("Game Over! Refresh page to play again!");
