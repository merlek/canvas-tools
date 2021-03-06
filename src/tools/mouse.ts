import { IRect, Rect } from './rect';

export type MouseEventListener = (event: MouseEvent) => any;
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
export class Mouse {
  private constructor() {}
  static addClickEventListener = (canvas: HTMLCanvasElement, ...buttons: IClickEventObject[]) => {
    const getMousePos = Mouse.getMousePos(canvas);

    const handler = (e: MouseEvent) => {
      const pos = getMousePos(e);
      buttons.forEach(button => {
        if (button.enabled && Rect.contains(pos, button)) {
          // click event
          button.onClick(e);
        }
      });
    };

    canvas.addEventListener('click', handler);

    return { type: 'click', function: handler } as {
      type: string;
      function: MouseEventListener;
    };
  };
  static addHoverEventListener = (canvas: HTMLCanvasElement, ...buttons: IHoverEventObject[]) => {
    const getMousePos = Mouse.getMousePos(canvas);

    const handler = (e: MouseEvent) => {
      const pos = getMousePos(e);
      let intersect = false;
      buttons.forEach(button => {
        if (button.enabled && Rect.contains(pos, button)) {
          // hover event
          if (button.state !== 'hover') {
            button.state = 'hover';
            if (button.onMouseEnter) {
              button.onMouseEnter(e);
            }
          }
          intersect = true;
        } else if (button.state === 'hover') {
          button.state = undefined;
          if (button.onMouseLeave) {
            button.onMouseLeave(e);
          }
        }
      });
      canvas.style.cursor = intersect ? 'pointer' : 'default';
    };

    canvas.addEventListener('mousemove', handler);

    return { type: 'mousemove', function: handler } as {
      type: string;
      function: MouseEventListener;
    };
  };
  static getMousePos = (canvas: HTMLCanvasElement) => (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
      y: ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height
    };
  };
}
