export interface IImageSet {
  [key: string]: HTMLImageElement;
}
export interface IImageSourceSet {
  [key: string]: string;
}
export class ImageLoader {
  private loaded = 0;
  private readonly total: number;
  private readonly images: IImageSet = {};
  constructor(sources: IImageSourceSet, callback: (images: IImageSet) => void = () => {}) {
    let t = 0;
    for (const src in sources) {
      if (sources.hasOwnProperty(src)) {
        t++;
      }
    }
    this.total = t;

    for (const src in sources) {
      if (sources.hasOwnProperty(src)) {
        this.images[src] = new Image();
        this.images[src].src = sources[src];
      }
    }

    this.onLoad(callback);
  }

  public hasImage(img: string) {
    return this.images[img] != null;
  }
  public onLoad(callback: (images: IImageSet) => void) {
    for (const img in this.images) {
      if (this.images.hasOwnProperty(img)) {
        if (this.loaded < this.total) {
          this.images[img].addEventListener(
            'load',
            () => {
              if (++this.loaded >= this.total) {
                callback(this.images);
              }
            },
            false
          );
        } else {
          callback(this.images);
        }
      }
    }
  }
}
