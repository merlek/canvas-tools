import { IRect } from './rect';
export declare type MouseEventListener = (event: MouseEvent) => any;
export interface IClickEventObject extends IRect {
    enabled: boolean;
    onClick: MouseEventListener;
}
export interface IHoverEventObject extends IRect {
    enabled: boolean;
    state?: 'hover';
    onMouseEnter?: MouseEventListener;
    onMouseLeave?: MouseEventListener;
}
export declare class Mouse {
    private constructor();
    static addClickEventListener: (canvas: HTMLCanvasElement, ...buttons: IClickEventObject[]) => {
        type: string;
        function: MouseEventListener;
    };
    static addHoverEventListener: (canvas: HTMLCanvasElement, ...buttons: IHoverEventObject[]) => {
        type: string;
        function: MouseEventListener;
    };
    static getMousePos: (canvas: HTMLCanvasElement) => (e: MouseEvent) => {
        x: number;
        y: number;
    };
}
//# sourceMappingURL=mouse.d.ts.map