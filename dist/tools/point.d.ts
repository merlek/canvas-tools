export interface IPoint {
    x: number;
    y: number;
    z?: number;
}
export declare class Point {
    private constructor();
    static create(x: number, y: number, z?: number): IPoint;
    static equals: (p1: IPoint) => (p2: IPoint) => boolean;
    static squaredDistance(p1: IPoint, p2: IPoint): number;
    static distance(p1: IPoint, p2: IPoint): number;
    static scale(factor: number, p: IPoint): IPoint;
}
//# sourceMappingURL=point.d.ts.map