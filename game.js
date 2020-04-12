"use strict";
var Game = /** @class */ (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    Game.prototype.displayGame = function () {
        //creates the html for the current game
        var gameForm = '';
        for (var i = 1; i < this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label" >';
            gameForm += String(this.factor) + ' X ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5"/></div>';
            gameForm += '</div>';
            //add the new game to the page
            var gameElement = document.getElementById('game');
            gameElement.innerHTML = gameForm;
            //enable the calculate score button
            document.getElementById('calcute').removeAttribute('disabled');
        }
    };
    return Game;
}());
