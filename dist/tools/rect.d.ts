import { IPoint } from './point';
export interface IRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class Rect {
    private constructor();
    static contains: (pos: IPoint, rect: IRect) => boolean;
    static intersects: (range: IRect, rect2: IRect) => boolean;
}
//# sourceMappingURL=rect.d.ts.map