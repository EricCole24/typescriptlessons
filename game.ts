class Game {
    private scoreboard: Scoreboard = new Scoreboard()
    
    constructor(public player:Player, public problemCount:number, public factor: number){
       
    }
    displayGame(): void {
        //creates the html for the current game
        let gameForm:string ='';
        for (let i = 1; i < this.problemCount; i++){
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label" >';
            gameForm += String(this.factor) + ' X ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i +'" size="5"/></div>';
            gameForm += '</div>';
            
            //add the new game to the page
            const gameElement: HTMLElement = document.getElementById('game')!;
            gameElement.innerHTML = gameForm;

            //enable the calculate score button
            document.getElementById('calcute')!.removeAttribute('disabled')
            
            
        }
    }
}