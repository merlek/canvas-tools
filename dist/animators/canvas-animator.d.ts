export declare abstract class CanvasAnimator {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement);
    abstract draw: (state?: any, ctx?: CanvasRenderingContext2D) => void;
    clear(ctx?: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=canvas-animator.d.ts.map