export interface Point {
  x: number;
  y: number;
  z?: number;
}
export class Point {
  private constructor() {}
  static create(x: number, y: number, z?: number): Point {
    return { x: x, y: y, z: z };
  }
  static equals = (p1: Point) => (p2: Point) => {
    return p1 != null && p2 != null && p1.x === p2.x && p1.y === p2.y && p1.z === p2.z;
  };
  static squaredDistance(p1: Point, p2: Point): number {
    return (
      Math.pow(p2.x - p1.x, 2) +
      Math.pow(p2.y - p1.y, 2) +
      (p1.z !== undefined && p2.z !== undefined ? Math.pow(p2.z - p1.z, 2) : 0)
    );
  }
  static distance(p1: Point, p2: Point): number {
    return Math.sqrt(this.squaredDistance(p1, p2));
  }
  static scale(factor: number, p: Point): Point {
    p.x *= factor;
    p.y *= factor;
    if (p.z !== undefined) {
      p.z *= factor;
    }
    return p;
  }
}
