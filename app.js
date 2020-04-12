function startGame() {
    var playerName = "Eric";
    logPlayer(playerName);
    var messageElement = document.getElementById("messages");
    messageElement.innerText = "Welcome to MultiMath! Starting Game";
}
function logPlayer(name) {
    console.log("New game starting for player: " + name);
}
var el = document.getElementById("StartGame");
if (el) {
    el.addEventListener('click', startGame);
}
;
