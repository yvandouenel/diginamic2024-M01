import User from "./models/User";
import Injector from "./utils/Injector";
import Product from "./models/Product";
import ResellerUser from "./models/ResellerUser";

const injector = new Injector();

//injector.register("user", new User("idlkqsdfhieiu", "bob"));
injector.register("user", new ResellerUser("idlkqsdfhieiu", "jojo"));

const product1 = new Product(
  injector.resolve<User>("user"),
  "izerfjoido",
  100,
  "xzf"
);

console.log(`prix de product1`, product1.price);
