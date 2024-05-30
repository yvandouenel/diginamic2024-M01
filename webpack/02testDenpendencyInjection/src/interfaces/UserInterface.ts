export default interface UserInterface {
  id: string;
  login: string;
  calculatePrice: (price: number) => number;
}
