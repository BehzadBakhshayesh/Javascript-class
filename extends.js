class Parent {
  constructor(a) {
    this.a = a;
  }
  parentMethod() {
    console.log("parentMethod");
  }
  parentProperty = "parentProperty";
}

class Child extends Parent {
  constructor(b) {
    super("a2");
    this.b = b;
  }
  childMethod() {
    console.log("childMethod");
    console.log("parentMethod", super.parentMethod(), this.parentMethod());
    console.log("parentProperty", super.parentProperty, this.parentProperty);
  }
}
const parntObj = new Parent("a1");
const childObj = new Child("b1");

console.log("parntObj: ", parntObj);
console.log("childObj: ", childObj);
console.log("childObj.childMethod() : ", childObj.childMethod());
console.log(childObj instanceof Parent, childObj instanceof Child);
