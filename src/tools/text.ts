export interface TextBox {
  text: string;
  x: number;
  y: number;
  maxWidth?: number;
  font: string | number;
  fillStyle?: string;
  strokeStyle?: string;
  textAlign?: CanvasTextAlign;
  textBaseline?: CanvasTextBaseline;
}
export class Text {
  static FONT_FAMILY =
    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  private constructor() {}
  static draw = (
    ctx: CanvasRenderingContext2D,
    {
      text,
      x,
      y,
      maxWidth,
      font,
      fillStyle,
      strokeStyle,
      textAlign = 'center',
      textBaseline = 'middle'
    }: TextBox
  ) => {
    ctx.save();

    if (typeof font === 'number') {
      font = Text.getFont(font);
    }
    ctx.font = font;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;

    if (!fillStyle && !strokeStyle) {
      fillStyle = 'black';
    }

    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fillText(text, x, y, maxWidth);
    }
    if (strokeStyle) {
      ctx.strokeStyle = strokeStyle;
      ctx.strokeText(text, x, y, maxWidth);
    }

    ctx.restore();
  };
  static getFont = (fontSize: number) => {
    return fontSize + 'px ' + Text.FONT_FAMILY;
  };
}
