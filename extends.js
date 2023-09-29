class Aclass {
  constructor(a) {
    this.a = a;
  }
  aMethod() {
    console.log("aMethod");
  }
  aProperty = "aProperty";
}

class Bclass extends Aclass {
  constructor(b) {
    super("a2");
    this.b = b;
  }

  bMethod() {
    console.log("bMethod");
    console.log("aMethod", super.aMethod(), this.aMethod());
    console.log("aProperty", super.aProperty, this.aProperty);
  }
}
const newA = new Aclass("a1");
const newB = new Bclass("b1");

console.log("newA: ", newA);
console.log("newB: ", newB);
console.log("newB.bb() : ", newB.bb());
console.log(newB instanceof Aclass, newB instanceof Bclass);
