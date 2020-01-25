export interface RoundedRectRadius {
    tl: number;
    tr: number;
    br: number;
    bl: number;
}
export declare class RoundedRect {
    private constructor();
    static draw(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius?: number | RoundedRectRadius, fill?: boolean, stroke?: boolean): void;
}
//# sourceMappingURL=rounded-rect.d.ts.map