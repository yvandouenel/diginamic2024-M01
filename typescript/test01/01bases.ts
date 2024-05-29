{
  let test: string = "Hello World!";
  function hello(name: string): string {
    return "Hello " + name;
  }
  hello("Bob");
  const fruits: string[] = ["Banane", "Cerise"];

  // Tuples
  const point: [number, number] = [12.3, 54.23];
  let contact: [string, number | string, boolean] = ["Bob", 72, false];

  // Enumération
  enum Color {
    white,
    blue,
    red,
  }
  let c: Color = Color.blue;
  let test2: any = 4;
  test2 = "Titi";
  test2 = {};
  function error(message: string): never {
    throw new Error(message);
  }
}
