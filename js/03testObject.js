

class Person {
  #name; // propriété privée
  constructor(name) {
    this.#name = name;
  }
  get name() {
    console.log(`Je passe dans le getter`);
    return this.#name;
  }
  set name(new_name) {
    this.#name = new_name;
  }
}
const b = new Person("Bob");
console.log(b.name);