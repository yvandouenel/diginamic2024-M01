interface Engine {
  type: string;
}

class Car {
  private engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }
  start(): void {
    console.log(`Car with ${this.engine.type} engine started!`);
  }
}

class V8Engine implements Engine {
  type = "V8";
}
class V12Engine implements Engine {
  type = "V12";
}

// Injector
class Injector {
  // création d'un type via le type utilitaire "Record". Ici "dependencies" devient un objet qui a des clés de type string et des valeurs correspondantes de n'importe quel type
  private dependencies: Record<string, any> = {};
  // Méthode qui permet d'enregistrer une propriété de dépendencies sour la forme "clé/valeur"
  register(key: string, value: any): void {
    this.dependencies[key] = value;
  }

  // Méthode qui renvoie la valeur correspondant à la clé key de l'objet dependencies
  resolve<T>(key: string): T {
    return this.dependencies[key];
  }
}

// Register our dependencies
const injector = new Injector();
injector.register("engine", new V12Engine());
injector.register("engine", new V8Engine());

// Resolve dependencies and create a new Car
const car = new Car(injector.resolve<Engine>("engine"));

car.start(); // Outputs: Car with V8 engine started!
