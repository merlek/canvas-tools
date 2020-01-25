export interface Point {
    x: number;
    y: number;
    z?: number;
}
export declare class Point {
    private constructor();
    static create(x: number, y: number, z?: number): Point;
    static equals: (p1: Point) => (p2: Point) => boolean;
    static squaredDistance(p1: Point, p2: Point): number;
    static distance(p1: Point, p2: Point): number;
    static scale(factor: number, p: Point): Point;
}
//# sourceMappingURL=point.d.ts.map