interface ResponsiveImageObject {
  path: string;
  width: number;
  height: number;
}

interface ResponsiveImage {
  width: number;
  height: number;
  srcSet: string;
  src: string;
  toString: () => string;
  images: ResponsiveImageObject[];
}

declare module "*.svg" {
  const content: ResponsiveImage;
  export default content;
}

declare module "*.png" {
  const content: ResponsiveImage;
  export default content;
}

declare module "*.jpeg" {
  const content: ResponsiveImage;
  export default content;
}

declare module "*.jpg" {
  const content: ResponsiveImage;
  export default content;
}
