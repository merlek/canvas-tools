import { ClickEventObject, HoverEventObject, MouseEventListener } from './mouse';
export interface Button extends ClickEventObject, HoverEventObject {
    radius: number;
    fillStyle: string;
    strokeStyle?: string;
    borderWidth?: number;
    hoverStyle?: string;
    text: string;
    font: string;
    textStyle: string | (() => string);
    state?: 'hover' | undefined;
    enabled: boolean;
    onClick: MouseEventListener;
    onMouseEnter?: MouseEventListener;
    onMouseLeave?: MouseEventListener;
}
export declare class Button {
    private constructor();
    static draw: (ctx: CanvasRenderingContext2D) => ({ x, y, width, height, radius, fillStyle, strokeStyle, borderWidth, hoverStyle, text, font, textStyle, state }: Button) => void;
}
//# sourceMappingURL=button.d.ts.map