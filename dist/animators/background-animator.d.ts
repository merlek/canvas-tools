import { CanvasAnimator } from './canvas-animator';
export declare class BackgroundAnimator extends CanvasAnimator {
    fillStyle: string;
    constructor(canvas: HTMLCanvasElement, fillStyle?: string);
    setup(): void;
    draw: (fillStyle?: string, ctx?: CanvasRenderingContext2D) => void;
    protected update: (t1: number) => (t2: number) => void;
}
//# sourceMappingURL=background-animator.d.ts.map