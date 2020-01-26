export interface TextBox {
    text: string;
    x: number;
    y: number;
    maxWidth?: number;
    font: string | number;
    fillStyle: string;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
}
export declare class Text {
    static FONT_FAMILY: string;
    private constructor();
    static draw: (ctx: CanvasRenderingContext2D, { text, x, y, maxWidth, font, fillStyle, textAlign, textBaseline }: TextBox) => void;
    static getFont: (fontSize: number) => string;
}
//# sourceMappingURL=text.d.ts.map