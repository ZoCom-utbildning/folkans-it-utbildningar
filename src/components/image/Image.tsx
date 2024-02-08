import "./image.scss";

interface ImageProps {
  src: string;
  alt: string;
}

function Image({ src, alt }: ImageProps) {
  return (
    <figure className="gradientImageWrapper">
      <img className="image" src={src} alt={alt} />
      <div className="gradient"> </div>
    </figure>
  );
}

export default Image;
