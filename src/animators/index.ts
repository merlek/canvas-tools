export * from './background-animator';
export * from './canvas-animator';
export * from './canvas-grid-animator';

export function createCanvasElement(
  containerId: string,
  width = 600,
  height = 600
): HTMLCanvasElement {
  const canvas = document.createElement('canvas') as HTMLCanvasElement;
  canvas.width = width;
  canvas.height = height;
  canvas.style.cssText = 'width: 100%;';

  const container = document.getElementById(containerId);
  if (container?.innerHTML) {
    container.innerHTML = '';
  }
  container?.append(canvas);
  return canvas;
}
