import { ClickEventObject, HoverEventObject } from './mouse';
import { RoundedRect } from './rounded-rect';
export interface Button extends RoundedRect, ClickEventObject, HoverEventObject {
    borderWidth?: number;
    hoverStyle?: string;
    text: string;
    font: string | number;
    textStyle: string | (() => string);
}
export declare class Button {
    private constructor();
    /**
     *
     * @param ctx - CanvasRenderingContext2D
     * @param button - Button
     */
    static draw(ctx: CanvasRenderingContext2D, { x, y, width, height, radius, fillStyle, strokeStyle, borderWidth, hoverStyle, text, font, textStyle, state }: Button): void;
}
//# sourceMappingURL=button.d.ts.map