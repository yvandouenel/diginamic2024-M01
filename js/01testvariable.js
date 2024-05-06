/* // Je ne peux pas réassigner la const
let i = 12;
//i = 12;
//i = 285;

const p = {
  name: "Pierre"
}
p.name = "Toto";

console.log(`p`, p);

if (i == 25) {
  console.log(`i est égal à 12`);
} */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const jc = {
  nom: "Dusse",
  prenom: "Jean-Claude",
  adresse: {
    cp: "3400",
    ville: "Montpellier"
  }
}
console.log(jc.nom);
console.log(jc.adresse.ville);

//let nom = "dusse";
let nom = new String("dusse");

