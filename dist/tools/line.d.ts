import { Point } from './point';
export interface Line {
    start: Point;
    end: Point;
}
export declare class Line {
    private constructor();
    static draw: (ctx: CanvasRenderingContext2D, { start, end }: Line) => void;
}
//# sourceMappingURL=line.d.ts.map