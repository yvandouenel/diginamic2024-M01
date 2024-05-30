import UserInterface from "../interfaces/UserInterface";
export default class Product {
  private _id: string;
  private _price: number;
  private _name: string;

  private _user: UserInterface;

  constructor(user: UserInterface, id: string, price: number, name: string) {
    this._user = user;
    this._id = id;
    this._price = price;
    this._name = name;
  }
  get price() {
    return this._user.calculatePrice(this._price);
  }
}
