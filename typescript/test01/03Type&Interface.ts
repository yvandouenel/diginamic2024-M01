type Point = {
  x: number;
  y: number;
};

const p1: Point = {
  x: 12,
  y: 45,
};

interface Person {
  name: string;
  age: number;
}

const bob: Person = {
  name: "Bob",
  age: 75,
};

class People implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
interface Searching {
  (critere1: string, critere2: string): boolean;
}

const searchByName: Searching = function (name, orderBy) {
  console.log("Je cherche !");
  return true;
};
searchByName("toto", "1");
