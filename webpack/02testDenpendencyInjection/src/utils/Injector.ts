export default class Injector {
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
