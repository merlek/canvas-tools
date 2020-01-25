import { Point } from './point';
export interface Circle {
    center: Point;
    radius: number;
}
export declare class Circle {
    private constructor();
    static create(x: number, y: number, radius: number): Circle;
    /**
     * Draws a circle
     * @param ctx - the canvas rendering context
     * @param circle - the circle to draw
     * @param fillStyle - the style to fill the circle
     * @param strokeStyle - the style to stroke the circle
     */
    static draw(ctx: CanvasRenderingContext2D, circle: Circle, fillStyle?: string, strokeStyle?: string): void;
}
//# sourceMappingURL=circle.d.ts.map