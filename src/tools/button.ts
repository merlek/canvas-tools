import { IClickEventObject, IHoverEventObject } from './mouse';
import { IRoundedRect, RoundedRect } from './rounded-rect';
import { Text } from './text';
export interface IButton extends IRoundedRect, IClickEventObject, IHoverEventObject {
  borderWidth?: number;
  hoverStyle?: string;
  text: string;
  font: string | number;
  textStyle: string | (() => string);
}
export class Button {
  private constructor() {}
  /**
   *
   * @param ctx - CanvasRenderingContext2D
   * @param button - Button
   */
  static draw(
    ctx: CanvasRenderingContext2D,
    {
      x,
      y,
      width,
      height,
      radius,
      fillStyle,
      strokeStyle = 'rgba(255,255,255,0)',
      borderWidth = Math.min(4, (width / 36) * 4),
      hoverStyle,
      text,
      font,
      textStyle,
      state
    }: IButton
  ) {
    ctx.save();

    if (state === 'hover' && hoverStyle) {
      fillStyle = hoverStyle;
    } else if (fillStyle) {
      fillStyle = fillStyle;
    }

    ctx.lineWidth = borderWidth;

    if (state === 'hover' && hoverStyle) {
      strokeStyle = hoverStyle;
    } else if (strokeStyle) {
      strokeStyle = strokeStyle;
    }

    RoundedRect.draw(ctx, {
      x,
      y,
      width,
      height,
      radius,
      fillStyle,
      strokeStyle
    });

    Text.draw(ctx, {
      text,
      x: x + width / 2,
      y: y + height / 2,
      maxWidth: width * 0.9,
      font,
      fillStyle: typeof textStyle === 'string' ? textStyle : textStyle()
    });

    ctx.restore();
  }
}
