import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  src: string;
  alt: string;
};

export default function MyImage({ src, alt }: Props) {
  return <LazyLoadImage src={src} effect="blur" alt={alt} />;
}
