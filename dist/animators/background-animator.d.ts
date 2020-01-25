import { CanvasAnimator } from './canvas-animator';
export declare class BackgroundAnimator extends CanvasAnimator {
    fillStyle: string;
    constructor(canvas: HTMLCanvasElement, fillStyle?: string);
    draw: (fillStyle?: string, ctx?: CanvasRenderingContext2D) => void;
}
//# sourceMappingURL=background-animator.d.ts.map