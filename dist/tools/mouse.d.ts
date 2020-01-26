import { Rect } from './rect';
export declare type MouseEventListener = (event: MouseEvent) => any;
export interface ClickEventObject extends Rect {
    enabled: boolean;
    onClick: MouseEventListener;
}
export interface HoverEventObject extends Rect {
    enabled: boolean;
    state?: 'hover';
    onMouseEnter?: MouseEventListener;
    onMouseLeave?: MouseEventListener;
}
export declare class Mouse {
    private constructor();
    static addClickEventListener: (canvas: HTMLCanvasElement, ...buttons: ClickEventObject[]) => {
        type: string;
        function: MouseEventListener;
    };
    static addHoverEventListener: (canvas: HTMLCanvasElement, ...buttons: HoverEventObject[]) => {
        type: string;
        function: MouseEventListener;
    };
    static getMousePos: (canvas: HTMLCanvasElement) => (e: MouseEvent) => {
        x: number;
        y: number;
    };
}
//# sourceMappingURL=mouse.d.ts.map