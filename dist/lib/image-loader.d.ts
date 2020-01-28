export interface IImageSet {
    [key: string]: HTMLImageElement;
}
export interface IImageSourceSet {
    [key: string]: string;
}
export declare class ImageLoader {
    private loaded;
    private readonly total;
    private readonly images;
    constructor(sources: IImageSourceSet, callback?: (images: IImageSet) => void);
    hasImage(img: string): boolean;
    onLoad(callback: (images: IImageSet) => void): void;
}
//# sourceMappingURL=image-loader.d.ts.map