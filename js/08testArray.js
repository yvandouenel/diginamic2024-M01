const fruits = ['Apple', 'Banana', 'Blueberry'];
//const fruits = new Array('Apple', 'Banana');
// Comme fruits est une instance de Array, il a accès à toutes les méthodes comprises dans le prototype de Array

// Ajout d'un élément // fonction impure
const result = fruits.push("Orange");
console.log(`result`, result);

console.log(`taille du tableau :`, fruits.length);

// Supprimer le dernier un élément - pop: impure
// fruits.pop()

// Supprimer l'avant dernier élément - splice : impure
if (fruits.length > 2) {
  fruits.splice(fruits.length - 2, 1);
}
console.log(`fruits`, fruits);

// Map : Pour faire un traitement chaque élément - fonction pure
const fruitsLi = fruits.map((fruit) => `<li>${fruit}</li>`);
console.log(`fruitsLi`, fruitsLi);

// Filtrer - fonction pure
const fruitsWithA = fruits.filter(fruit => fruit.toLowerCase().includes("a"));
console.log(`fruitsWithA`, fruitsWithA);

// Trier - sort
const numbers = [45, 2, 15, 35, 4, 1, -58];
console.log(numbers.sort((a, b) => a - b));

// reduce 
console.log(`fruits`, fruits);
const lettersNumber = fruits.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);

console.log(`lettersNumber`, lettersNumber);

// Spread operator pour copier et "étaler" un tableau
const allFruits = ["Tomato", ...fruits, "Pineapple", "Tomato"];

console.log(`allFruits`, allFruits);






