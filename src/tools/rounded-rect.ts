import { IRect } from './rect';

export interface IRoundedRectRadius {
  tl: number;
  tr: number;
  br: number;
  bl: number;
}

export interface IRoundedRect extends IRect {
  radius: number | IRoundedRectRadius;
  fillStyle?: string;
  strokeStyle?: string;
}
export class RoundedRect {
  private constructor() {}
  static draw(
    ctx: CanvasRenderingContext2D,
    { x, y, width, height, radius, fillStyle, strokeStyle }: IRoundedRect
  ) {
    if (typeof radius === 'number') {
      radius = {
        tl: radius,
        tr: radius,
        br: radius,
        bl: radius
      };
    }

    ctx.save();

    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
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
