const users = [
  { name: "Dylan", age: 78 },
  { name: "Marley", age: 92 },
  { name: "Cohen", age: 83 },
  { name: "Jackson", age: 76 },
]
//Classer (sort) le tableau suivant par age croissant puis par age décroissant.

console.log(users.sort((a, b) => a.age - b.age));

/* En une seule instruction, ajouter 3 fruits au tableau "fruits" et classer les fruits par taille de chaîne de caractères. 
N'utilisez pas push mais plutôt le spread operator et ensuite sort et afficher le résultat dans la console. */

const fruits = ['Apple', 'Banana', 'Blueberry'];
const result = [...fruits, "fruit1", "fruit2", "fruit3"].sort((a, b) => a.length - b.length);
console.log(`result`, result);
