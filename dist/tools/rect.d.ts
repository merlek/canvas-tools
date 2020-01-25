import { Point } from './point';
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class Rect {
    private constructor();
    static isIntersect: (pos: Point, button: Rect) => boolean;
}
//# sourceMappingURL=rect.d.ts.map