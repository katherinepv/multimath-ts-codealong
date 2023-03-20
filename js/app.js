var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
var logPlayer = function (name) {
    if (name === void 0) { name = "MultiMath Player"; }
    console.log("New game starting for player: ".concat(name));
};
var logMessage = function (message) { return console.log(message); };
var logError = function (err) { return console.error(err); };
var getInputValue = function (elementID) {
    var inputElement = (document.getElementById(elementID));
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
};
var postScore = function (score, playerName) {
    if (playerName === void 0) { playerName = "MultiMath Player"; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = "".concat(score, " - ").concat(playerName);
    logger("Score: ".concat(score));
};
var startGame = function () {
    var playerName = getInputValue("playername");
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-3, playerName);
};
var firstPlayer = new Player();
firstPlayer.name = "Lanier";
console.log(firstPlayer.formatName());
document.getElementById("startGame").addEventListener("click", startGame);
//# sourceMappingURL=app.js.map