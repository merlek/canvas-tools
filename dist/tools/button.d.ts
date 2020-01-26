import { ClickEventObject, HoverEventObject, MouseEventListener } from './mouse';
import { RoundedRect } from './rounded-rect';
export interface Button extends RoundedRect, ClickEventObject, HoverEventObject {
    borderWidth?: number;
    hoverStyle?: string;
    text: string;
    fontFamily: string;
    textStyle: string | (() => string);
    state?: 'hover' | undefined;
    enabled: boolean;
    onClick: MouseEventListener;
    onMouseEnter?: MouseEventListener;
    onMouseLeave?: MouseEventListener;
}
export declare class Button {
    private constructor();
    /**
     *
     * @param ctx - CanvasRenderingContext2D
     * @param button - Button
     */
    static draw(ctx: CanvasRenderingContext2D, { x, y, width, height, radius, fillStyle, strokeStyle, borderWidth, hoverStyle, text, fontFamily, textStyle, state }: Button): void;
}
//# sourceMappingURL=button.d.ts.map