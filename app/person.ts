interface Person {
  name: string;
  age?: number; // adding a question mark after an interface name marks it as optional. Objects that implement that interface aren't required to implement that member.
  formatName: () => string;
}
