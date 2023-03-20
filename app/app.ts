/// <reference path="player.ts" />
// ^ adds a triple slash directive
// essentially a single-line comment that must appear at the very beginning of a file in order to provide additional instructions to the compiler.
// can be configured to do many things
// most common use is to provide reference to another file.
// in this example, it says the code in this file is dependent on the code in the player.ts file.
// the compiler will automatically compile player.ts whenevr it compiles app.ts

const logPlayer = (name: string = "MultiMath Player"): void => {
  console.log(`New game starting for player: ${name}`);
};

const logMessage = (message: string) => console.log(message);
const logError = (err: string): void => console.error(err);

const getInputValue = (elementID: string): string | undefined => {
  // <HTMLInputElement> is a type assertion that will treat the element it finds as
  // the more specific HTMLInputElement type.
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  if (inputElement.value === "") {
    return undefined;
  } else {
    return inputElement.value;
  }
};

const postScore = (
  score: number,
  playerName: string = "MultiMath Player"
): void => {
  // TS functions have a type of their own
  // using function types as type annotations

  // to gove this variable a function type, just add a colon after the variable name as usual
  //and then put the expected function parameters and their types in parentheses.
  // followed by an arrow and the expected function return type.
  // this logger variable may now be assigned any function that takes a single string parameter and returns void. (just like logMessage and logError functions).
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null =
    document.getElementById("postedScores");
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`);
};

const startGame = () => {
  let playerName: string | undefined = getInputValue("playername");
  logPlayer(playerName);

  postScore(80, playerName);
  postScore(-3, playerName);
};

// declare variable and assign it the Player type.
// Then initialise it to an instance of the player class by using the 'new' keyword and the name of the class with parentheses.
const firstPlayer: Player = new Player();
firstPlayer.name = "Lanier";
console.log(firstPlayer.formatName());

document.getElementById("startGame")!.addEventListener("click", startGame);
