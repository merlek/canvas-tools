export abstract class CanvasAnimator {
  protected ctx: CanvasRenderingContext2D;
  protected animationFrameId?: number;
  constructor(protected canvas: HTMLCanvasElement, public fps = 30) {
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    setTimeout(() => {
      this.setup();
    }, 0);
    window.requestAnimationFrame(this.update(0));
  }
  public abstract draw(state?: any, ctx?: CanvasRenderingContext2D): void;
  public abstract setup(): void;
  protected update = (t1: DOMHighResTimeStamp) => (t2: DOMHighResTimeStamp) => {
    if (t2 - t1 > 1000 / this.fps) {
      this.draw();
      this.animationFrameId = window.requestAnimationFrame(this.update(t2));
    } else {
      this.animationFrameId = window.requestAnimationFrame(this.update(t1));
    }
  };
  public clear(ctx: CanvasRenderingContext2D = this.ctx): void {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  public destroy(): void {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
}
