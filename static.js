class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
const distance = Point.distance(p1, p2);

console.log(p1, p2, distance);
