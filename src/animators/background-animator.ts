import { CanvasAnimator } from './canvas-animator';

export class BackgroundAnimator extends CanvasAnimator {
  constructor(canvas: HTMLCanvasElement, public fillStyle: string = '#232323') {
    super(canvas);
  }
  public setup() {}
  public draw = (fillStyle = this.fillStyle, ctx: CanvasRenderingContext2D = this.ctx) => {
    ctx.save();

    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.restore();
  };
  protected update = (t1: DOMHighResTimeStamp) => (t2: DOMHighResTimeStamp) => {
    this.draw();
  };
}
