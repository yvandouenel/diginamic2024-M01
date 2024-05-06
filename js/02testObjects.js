// Objets littéraux avec une syntaxe proche du JSON
const jc = {
  "nom": "Dusse",
  "prenom": "Jean-Claude",
  "adresse": {
    "cp": "3400",
    "ville": "Montpellier"
  }
}

// Fonction constructeur
/* function Person(nom, prenom, adresse) {
  this.nom = nom;
  this.prenom = prenom;
  this.adresse = adresse;

} */

// Syntaxe (sucre) de classe
class Person {
  // constructeurs avec déclaration des propriétés directes
  constructor(nom, prenom, adresse) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
  }
  // Ajout de la méthode display au prototype de Person
  display() {
    console.log(`Bonjour (propriété du prototype de Person), je m'appelle ${this.prenom} et j'habite à ${this.adresse.ville}`);
  }
}

// On va placer toutes les méthodes dans le prototype de la fonction constructeur Person


let didier = new Person("Durand", "Didier", { cp: "34000", ville: "Mtp" });
let josette = new Person("Dupond", "Josette", { cp: "34000", ville: "Mtp" });

if (didier.display == josette.display) console.log(`display a la même référence`);
else console.log(`display n'a pas la même référence`);

console.log(`didier`, didier);
didier.display();