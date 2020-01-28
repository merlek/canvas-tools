import { IPoint } from './point';

export interface ILine {
  start: IPoint;
  end: IPoint;
}

export class Line {
  private constructor() {}
  static draw = (ctx: CanvasRenderingContext2D, { start, end }: ILine) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  };
}
