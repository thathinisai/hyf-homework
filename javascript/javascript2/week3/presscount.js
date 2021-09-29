let Jsstartgame = document.getElementById("startgame");
let Jsduration = document.getElementById("duration");
let Jsscount = document.getElementById("scount");
let Jslcount = document.getElementById("lcount");
let JssWinner = document.getElementById("scountWinner");
let JslWinner = document.getElementById("lcountWinner");
let Jsresetgame = document.getElementById("resetgame");
let Jsseconds = document.getElementById("seconds");
let Jsgamestatus = document.getElementById("gamestatus");
let sCount = 0;
let lCount = 0;
//timer and winner
Jsstartgame.addEventListener("click", (event) => {
  if (Jsduration.value >= 0) {
    let secs = 0;
    let secsleft = Jsduration.value;

    let id = setInterval(function () {
      secs++;
      secsleft--;
      Jsseconds.innerHTML = "Time left: " + secsleft + " Seconds";
      if (secs >= 0) {
        if (sCount === 0 && lCount === 0) {
          Jsgamestatus.innerHTML = "game started Click S or L";
        }
      }

      if (secs == Jsduration.value) {
        clearInterval(id);

        if (sCount > lCount) {
          JssWinner.innerHTML = "Winner &#9819";
          Jsgamestatus.innerHTML =
            "game finished... click restart to play again";
        } else if (sCount < lCount) {
          JslWinner.innerHTML = "Winner &#9819";
          Jsgamestatus.innerHTML =
            "game finished... click restart to play again";
        } else {
          JssWinner.innerHTML = "Draw";
          JslWinner.innerHTML = "Draw";
          Jsgamestatus.innerHTML =
            "game finished... click restart to play again";
        }
        Jsresetgame.disabled = false;
        document.removeEventListener("keyup", keyCount);
      }
    }, 1000);
  }
});
Jsresetgame.addEventListener("click", (restartTheGame) => {
  document.location.href = "";
});
//counting of L and S keys
document.addEventListener("keyup", keyCount);
function keyCount(event) {
  if (Jsduration.value > 0) {
    if (event.code === "KeyL") {
      lCount++;
      lcount.innerHTML = lCount;
    }
    if (event.code === "KeyS") {
      sCount++;
      scount.innerHTML = sCount;
    }
  }
}
