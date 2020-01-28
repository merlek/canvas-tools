import { Point } from './point';

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Rect {
  private constructor() {}
  static contains = (pos: Point, rect: Rect) =>
    pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y;

  static intersects = (range: Rect, rect2: Rect) =>
    !(
      range.x > rect2.x + rect2.width ||
      range.x + range.width < rect2.x ||
      range.y > rect2.y + range.height ||
      range.y + range.height < rect2.y
    );
}
