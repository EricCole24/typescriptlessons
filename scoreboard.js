"use strict";
var Scoreboard = /** @class */ (function () {
    function Scoreboard() {
        this.result = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.result.push(newResult);
    };
    Scoreboard.prototype.updateScore = function () {
        var output = '<h2>Scoreborad</h2>';
        for (var index = 0; index < this.result.length; index++) {
            var result = this.result[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor' + result.factor;
            output += '</h4>';
        }
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };
    return Scoreboard;
}());
