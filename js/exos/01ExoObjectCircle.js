/* Créer un constructeur de cercle qui a pour propriétés :

 - "rayon" en mètre qui sera définie à l'instanciation de chaque cercle
 - "nom" qui permettra de donner un nom à chaque cercle et qui sera définie à l'instanciation également de chaque cercle
 - "Pi" qui sera stocké dans un seul espace mémoire (dans le prototype soit une propriété de classe)
 - aire() qui affichera dans la console l'aire ( pi x rayon²). 

Créez 2 instances de Cercle, petit_cercle et grand_cercle qui auront respectivement pour rayon 2 et 4
Appelez aire sur les 2 instances
Essayer de définir au bon endroit "aire()"
Puis instancier 2 cercles qui ont respectivement pour rayon : 2 et 4 mètres et pour nom petit_cercle et grand_cercle.: */
/**
 * Class Circle 
 * 

 */
class Circle {
  static pi = 3.14;
  /**
   * Constructeur de cercle
   * @param {Number} radius 
   * @param {String} name 
   * @returns {Circle} une instance de Circle
   */
  constructor(radius, name) {
    this.radius = radius;
    this.name = name;
  }
  /**
   * Calcul de l'aire
   * @returns Number
   */
  area() {
    return this.radius ** 2 * Circle.pi;
  }
}

// Création des instances
const bigCircle = new Circle(4, "Big circle");
const smallCircle = new Circle(2, "Small circle");
console.log(`bigCircle`, bigCircle);
console.log(`smallCircle`, smallCircle);
console.log(`area smallCircle`, smallCircle.area());