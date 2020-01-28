export interface ITextBox {
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
export declare class Text {
    static FONT_FAMILY: string;
    private constructor();
    static draw: (ctx: CanvasRenderingContext2D, { text, x, y, maxWidth, font, fillStyle, strokeStyle, textAlign, textBaseline }: ITextBox) => void;
    static getFont: (fontSize: number) => string;
}
//# sourceMappingURL=text.d.ts.map