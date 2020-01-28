import { IPoint } from './point';
export interface ILine {
    start: IPoint;
    end: IPoint;
}
export declare class Line {
    private constructor();
    static draw: (ctx: CanvasRenderingContext2D, { start, end }: ILine) => void;
}
//# sourceMappingURL=line.d.ts.map