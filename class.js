class MyClass {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const MyClass2 = class MyClass2 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
};

class MyClass3 {
  a = 1;
  b;
  c() {
    console.log("c");
  }
  d = function () {
    console.log("d");
  };
  constructor(e) {
    this.e = e;
  }
}

class MyClass4 {
  *a() {
    yield this.b;
    yield this.c;
  }
  constructor(b, c) {
    this.b = b;
    this.c = c;
  }
}

class MyClass5 {
  a = 1;
  b() {
    return 2;
  }
}

const obj = new MyClass(1, 2);
const obj2 = new MyClass2(3, 4);
const obj3 = new MyClass3(5);
const obj4 = new MyClass4(6, 7);
const obj5 = new MyClass5();

console.log({ obj, obj2, obj3, obj4, obj5 });
