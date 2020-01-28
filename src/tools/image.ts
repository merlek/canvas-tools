import { Point } from './point';
export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}
export interface Pixel {
  position: Point;
  color: Color;
}
export class Image {
  private constructor() {}
  static getPixel(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number
  ): Pixel | undefined {
    const data = ctx.getImageData(x, y, 1, 1).data;
    return {
      position: { x, y },
      color: {
        r: data[0],
        g: data[1],
        b: data[2],
        a: data[3]
      }
    };
  }
  static getCanvasPixels(canvas: HTMLCanvasElement): Pixel[] {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    const rgba: Pixel[] = [];

    for (let i = 0; i < data.length; i += 4) {
      const pixel = Math.floor(i / 4);
      const alpha = data[i + 3];
      if (alpha > 0) {
        rgba.push({
          position: {
            x: pixel % canvas.width,
            y: Math.floor(pixel / canvas.width)
          },
          color: {
            r: data[i],
            g: data[i + 1],
            b: data[i + 2],
            a: data[i + 3]
          }
        });
      }
    }

    return rgba;
  }
}
