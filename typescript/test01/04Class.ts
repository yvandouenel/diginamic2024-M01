class Base {
  private _x = 12;
  get x() {
    console.log("dans le getter");
    return this._x;
  }
  set x(value: number) {
    console.log("dans le setter");
    this._x = value;
  }
}
const b = new Base();
b.x = 25;
