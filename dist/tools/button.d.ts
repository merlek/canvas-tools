import { IClickEventObject, IHoverEventObject } from './mouse';
import { IRoundedRect } from './rounded-rect';
export interface IButton extends IRoundedRect, IClickEventObject, IHoverEventObject {
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
    static draw(ctx: CanvasRenderingContext2D, { x, y, width, height, radius, fillStyle, strokeStyle, borderWidth, hoverStyle, text, font, textStyle, state }: IButton): void;
}
//# sourceMappingURL=button.d.ts.map