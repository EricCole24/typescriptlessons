function startGame(){
    let playerName:string = "Eric";
    logPlayer(playerName);
    let messageElement = document.getElementById("messages")
    messageElement!.innerText = "Welcome to MultiMath! Starting Game";
}
function logPlayer(name:string){
console.log(`New game starting for player: ${name}`);
}
 let el = document.getElementById("StartGame");
 if(el){
 el!.addEventListener('click', startGame)};