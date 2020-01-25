import { CanvasAnimator } from './canvas-animator';
export declare abstract class CanvasGridAnimator extends CanvasAnimator {
    protected canvas: HTMLCanvasElement;
    protected grid: {
        cols: number;
        rows: number;
    };
    constructor(canvas: HTMLCanvasElement, grid: {
        cols: number;
        rows: number;
    });
    protected x(x: number): number;
    protected y(y: number): number;
}
//# sourceMappingURL=canvas-grid-animator.d.ts.map