/// <reference path="person.ts" />
// this begins to create a chain of dependencies: the tsconfig.json file only instructs the compiler to compile app.ts,
// but that file references player.ts, therefore the compiler compiles it and sees that it references person.ts
// so that gets compiled as well.

class Player implements Person {
  name: string;
  age?: number;
  highScore: number;
  formatName() {
    return this.name.toUpperCase();
  }
}
