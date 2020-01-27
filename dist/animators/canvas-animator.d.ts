export declare abstract class CanvasAnimator {
    protected canvas: HTMLCanvasElement;
    fps: number;
    protected ctx: CanvasRenderingContext2D;
    protected animationFrameId?: number;
    constructor(canvas: HTMLCanvasElement, fps?: number);
    abstract draw(state?: any, ctx?: CanvasRenderingContext2D): void;
    abstract setup(): void;
    protected update: (t1: number) => (t2: number) => void;
    clear(ctx?: CanvasRenderingContext2D): void;
    destroy(): void;
}
//# sourceMappingURL=canvas-animator.d.ts.map