class Foo {
  private _bar: boolean = true;

  get bar(): boolean {
    return this._bar;
  }

  set bar(theBar: boolean) {
    this._bar = theBar;
  }
}

const foo = new Foo();

foo.bar = false;

function add(x: number, y: number) {
  return x + y;
}
console.log(add(2, 3));

export default Foo;
