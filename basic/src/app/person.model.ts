export class Person {
  constructor(private name: string, public age: number) {}

  getName() {
    return this.name;
  }
}