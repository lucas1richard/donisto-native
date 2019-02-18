import { Asset } from "expo";

interface ImageProviderImages {
  [x: string]: any;
}

class ImageProvider {
  static images: ImageProviderImages = {};

  static registerImage(name: string, img: any) {
    ImageProvider.images[name] = img;
  }

  static getImage(name: string): any {
    return ImageProvider.images[name];
  }

  static async preloadLocalImage() {
    return Asset.fromModule(require('../assets/scenic-1.jpg')).downloadAsync();
  }
}

export default ImageProvider;
