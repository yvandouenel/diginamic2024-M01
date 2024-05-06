/* function test() {
  return "Hello";
}

// ici on assigne le retour de la fonction test()
const t = test();

// ici on assigne la référence à la fonction. On peut dire que tf est un alias de test()
const tf = test;

console.log(`tf`, tf);
tf();

/* function double(x) {
  return x * 2
} 
const double = x => 2 * x;

console.log(typeof (double));
let double = function (x) {
  return x * 2
}


function addPartner(first, ...people) {
  console.log(`first : `, first);
  people.forEach(person => {
    console.log(`person : `, person);
  })
}
addPartner("Bob", "Ray", "Nina"); */

let i = 1;
function a() {
  let j = 2;
  b();
  console.log(`j`, j);
  console.log(`b`, b);
  function b() {

    let l = 4;
    console.log(l);
    {
      let k = 3;
    }
    /*console.log(k); */
  }
}
a();
console.log(``);
// Scope global : i a
// Scope de la fonction a : j, b et i a
// Scope de la fonction b : l et j, b et i a
// Scope du bloc de code de la fonction b : k et l, j, b et i a

