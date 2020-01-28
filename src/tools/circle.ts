import { Point } from './point';

export interface Circle {
  center: Point;
  radius: number;
  fillStyle?: string;
  strokeStyle?: string;
}
export class Circle {
  private constructor() {}
  static create(x: number, y: number, radius: number): Circle {
    const center = { x, y };
    return { center, radius };
  }
  /**
   * Draws a circle
   * @param ctx - the canvas rendering context
   * @param circle - the circle to draw
   * @param fillStyle - the style to fill the circle
   * @param strokeStyle - the style to stroke the circle
   */
  static draw(ctx: CanvasRenderingContext2D, { center, radius, fillStyle, strokeStyle }: Circle) {
    ctx.save();

    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.closePath();

    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }

    if (strokeStyle) {
      ctx.strokeStyle = strokeStyle;
      ctx.stroke();
    }

    ctx.restore();
  }
}
