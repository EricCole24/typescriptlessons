class Scoreboard {
    private result: Result[] = [];

    addResult(newResult:Result):void{
        this.result.push(newResult);
    }
    updateScore():void{
        let output:string = '<h2>Scoreborad</h2>';
        for (let index = 0; index < this.result.length; index++){

        
        const result:Result = this.result[index];
        output += '<h4>'
        output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor' + result.factor;
        output += '</h4>'
    }
    const scoresElement: HTMLElement = document.getElementById('scores')!;
    scoresElement.innerHTML = output;
    }
}