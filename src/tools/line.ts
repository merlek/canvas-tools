import { Point } from './point';

export interface Line {
  start: Point;
  end: Point;
}

export class Line {
  private constructor() {}
  static draw = (ctx: CanvasRenderingContext2D, { start, end }: Line) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  };
}
