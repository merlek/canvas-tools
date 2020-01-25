export interface ImageSet {
    [key: string]: HTMLImageElement;
}
export interface ImageSourceSet {
    [key: string]: string;
}
export declare class ImageLoader {
    private loaded;
    private readonly total;
    private readonly images;
    constructor(sources: ImageSourceSet, callback?: (images: ImageSet) => void);
    hasImage(img: string): boolean;
    onLoad(callback: (images: ImageSet) => void): void;
}
//# sourceMappingURL=image-loader.d.ts.map