import { Point } from './point';
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class Rect {
    private constructor();
    static contains: (pos: Point, rect: Rect) => boolean;
    static intersects: (range: Rect, rect2: Rect) => boolean;
}
//# sourceMappingURL=rect.d.ts.map