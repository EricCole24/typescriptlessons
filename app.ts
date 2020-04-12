
// functions section
function startGame():void{
    let playerName:string |undefined = getInputValue('playername');
    logPlayer(playerName);
    score(100,playerName);
}
function logPlayer(name:string = "Multimath Player"):void{
console.log(`New game starting for player: ${name}`);
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
function score(score:number, playerName?:string):void{
    const scoreElement: HTMLElement | null = document.getElementById("postedScores");
    scoreElement!.innerText = `${score} - ${playerName}`;
}function logMessage(message:string): void{
    console.log(message);
}
//arrow function
const logMessage2 = (message:string) => console.log(message);
//funtion end

function logError(err:string):void{
    console.log(err)
} let el = document.getElementById("StartGame");
 if(el){
 el!.addEventListener('click', startGame)};

 // interface section

 let myResult : Result = {
     playerName : "Eric",
     score: 5,
     problemCount:5,
     factor : 7
 }

 let player: Person = {
     name: "David",
     formatName:() => 'dave'
 }

 
 // class section
 

 //type assertion
 //let value:any = 5;
 //let fixed: string = (value as number).toFixed(4)
 // question mark after an anottation in a function signifies optional
 // form of arrow function parameters => function body
 //let squre = x(where x is the parameter) => x * x(funtion body)
 //call the function let result = squre(4)
 // if no parameter put an empty parenthesis let greetings =() => console.log("hiiiii")