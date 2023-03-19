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
var myResult = {
    playerName: "Marie",
    score: 5,
    problemCount: 5,
    factor: 7,
};
var player = {
    name: "Daniel",
    formatName: function () { return "Dan"; },
};
document.getElementById("startGame").addEventListener("click", startGame);
//# sourceMappingURL=app.js.map