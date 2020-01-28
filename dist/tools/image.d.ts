import { IPoint } from './point';
export interface IColor {
    r: number;
    g: number;
    b: number;
    a: number;
}
export interface IPixel {
    position: IPoint;
    color: IColor;
}
export declare class Image {
    private constructor();
    static getPixel(ctx: CanvasRenderingContext2D, x: number, y: number): IPixel | undefined;
    static getCanvasPixels(canvas: HTMLCanvasElement): IPixel[];
}
//# sourceMappingURL=image.d.ts.map