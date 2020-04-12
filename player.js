"use strict";
var Player = /** @class */ (function () {
    function Player(name, age, highScore) {
        this.name = name;
        this.age = age;
        this.highScore = highScore;
    }
    Player.prototype.formatName = function () {
        return this.name.toLocaleUpperCase();
    };
    return Player;
}());
