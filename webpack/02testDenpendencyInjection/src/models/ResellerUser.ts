import User from "./User";

export default class ResellerUser extends User {
  calculatePrice(price: number): number {
    return price * 0.9;
  }
}
