class A {
  #a;
  #b = 42;
  #c() {
    console.log("c");
  }

  d() {
    return this.#b;
  }
}

const aObj = new A();
console.log(aObj);
