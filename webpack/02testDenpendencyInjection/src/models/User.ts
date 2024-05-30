import UserInterface from "../interfaces/UserInterface";

export default class User implements UserInterface {
  // Déclaration des propriétés privées
  private _id: string;
  private _login: string;

  constructor(id: string, login: string) {
    this._id = id;
    this._login = login;
  }
  get id(): string {
    return this._id;
  }
  get login(): string {
    return this._login;
  }
  calculatePrice(price: number): number {
    return price;
  }
}
