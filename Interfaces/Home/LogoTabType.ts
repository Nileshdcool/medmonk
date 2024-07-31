export interface LogoTabType {
  name: string;
  logos: LogoTabImagesType[][];
  description: string;
}
export interface LogoImage{
  image: string;
  style?: {}
}
export interface LogoTabImagesType {
  containerClass: string;
  images: LogoImage[];
}

