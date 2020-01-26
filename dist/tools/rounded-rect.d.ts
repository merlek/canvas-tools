import { Rect } from './rect';
export interface RoundedRectRadius {
    tl: number;
    tr: number;
    br: number;
    bl: number;
}
export interface RoundedRect extends Rect {
    radius: number | RoundedRectRadius;
    fillStyle?: string;
    strokeStyle?: string;
}
export declare class RoundedRect {
    private constructor();
    static draw(ctx: CanvasRenderingContext2D, { x, y, width, height, radius, fillStyle, strokeStyle }: RoundedRect): void;
}
//# sourceMappingURL=rounded-rect.d.ts.map