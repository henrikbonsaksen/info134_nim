// Skal definere logikk som oppretter et "Nim Objekt".


// Skal returnere verdier:
var protoSpiller = {
  get gamer() {
    return this.name + "is a: " + " " this.human + "player " + "and has: " + this.total + "left";
  }
};

// Oppskrift på å lage spillere:
function createPlayer(name, human, total) {
  var spillerObjekt = Object.create(opprettSpillere);
  spillerObjekt.name = name;
  spillerObjekt.human = human;
  spillerObjekt.total = total;
  return spillerObjekt;
}

// SKal definere et nytt spill:
var spill = {
  game: createPlayer("Geir", True, 14)
};

// Loop for å teste stuff... yeeeaaahhhh.. ghaaaddd..
for (var nøkkel in spill) {
  var verdi = spill[nøkkel];
  console.log(verdi.gamer);
}

<button id="button"></button>

<script type="text/javascript">
    var buttons = document.getElementById("button");
    buttons.innerHTML = '<img src="images\ok.png" />';
</script>
