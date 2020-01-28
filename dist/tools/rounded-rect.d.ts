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
export declare class RoundedRect {
    private constructor();
    static draw(ctx: CanvasRenderingContext2D, { x, y, width, height, radius, fillStyle, strokeStyle }: IRoundedRect): void;
}
//# sourceMappingURL=rounded-rect.d.ts.map