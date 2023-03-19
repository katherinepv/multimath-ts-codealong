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

let myResult: Result = {
  playerName: "Marie",
  score: 5,
  problemCount: 5,
  factor: 7,
};

let player: Person = {
  name: "Daniel",
  formatName: () => "Dan",
};

document.getElementById("startGame")!.addEventListener("click", startGame);
