"use strict";
// functions section
function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    score(100, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = "Multimath Player"; }
    console.log("New game starting for player: " + name);
}
/*function getInputValue(elementId:string):string | undefined{
    const inputElement : HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    if(inputElement.value === ''){
     return undefined;
 }
 else{
     return inputElement.value
 }
}*/
function score(score, playerName) {
    var scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = score + " - " + playerName;
}
function logMessage(message) {
    console.log(message);
}
//arrow function
var logMessage2 = function (message) { return console.log(message); };
//funtion end
function logError(err) {
    console.log(err);
}
var el = document.getElementById("StartGame");
if (el) {
    el.addEventListener('click', startGame);
}
;
// interface section
var myResult = {
    playerName: "Eric",
    score: 5,
    problemCount: 5,
    factor: 7
};
var player = {
    name: "David",
    formatName: function () { return 'dave'; }
};
// class section
//type assertion
//let value:any = 5;
//let fixed: string = (value as number).toFixed(4)
// question mark after an anottation in a function signifies optional
// form of arrow function parameters => function body
//let squre = x(where x is the parameter) => x * x(funtion body)
//call the function let result = squre(4)
// if no parameter put an empty parenthesis let greetings =() => console.log("hiiiii")
