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
export declare class Image {
    private constructor();
    static getPixel(ctx: CanvasRenderingContext2D, x: number, y: number): Pixel | undefined;
    static getCanvasPixels(canvas: HTMLCanvasElement): Pixel[];
}
//# sourceMappingURL=image.d.ts.map