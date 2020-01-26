import { Point } from './point';

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Rect {
  private constructor() {}
  static isIntersect = (pos: Point, rect: Rect) =>
    pos.x > rect.x &&
    pos.x < rect.x + rect.width &&
    pos.y < rect.y + rect.height &&
    pos.y > rect.y;
}
